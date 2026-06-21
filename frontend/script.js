//algorithm metadata

const algorithmInfo = {

    bfs: {
        name: "Breadth First Search",
        time: "O(V + E)",
        space: "O(V)"
    },

    dfs: {
        name: "Depth First Search",
        time: "O(V + E)",
        space: "O(V)"
    },

    dijkstra: {
        name: "Dijkstra Algorithm",
        time: "O((V + E) log V)",
        space: "O(V)"
    },

    astar: {
        name: "A* Search",
        time: "O(E log V)",
        space: "O(V)"
    }
};

const svg = document.getElementById("graphCanvas");
let graphData = {};

const positions = {

    A:[100,110],
    B:[220,110],
    C:[340,110],
    D:[460,110],
    E:[580,110],
    F:[700,110],

    G:[100,240],
    H:[220,240],
    I:[340,240],
    J:[460,240],
    K:[580,240],
    L:[700,240],

    M:[100,370],
    N:[220,370],
    O:[340,370],
    P:[460,370],
    Q:[580,370],
    R:[700,370],

    S:[100,500],
    T:[220,500],
    U:[340,500],
    V:[460,500],
    W:[580,500],
    X:[700,500]
};

async function loadGraph() {

    const response = await fetch("/graph");

    graphData = await response.json();

    console.log(graphData);
}


function getWeight(from, to) {

    const edge =
        graphData[from]?.find(
            e => e.node === to
        );

    return edge ? edge.weight : "";
}

//edge list
const edges = [

    // Row 1
    ["A","B"],["B","C"],["C","D"],["D","E"],["E","F"],

    // Row 2
    ["G","H"],["H","I"],["I","J"],["J","K"],["K","L"],

    // Row 3
    ["M","N"],["N","O"],["O","P"],["P","Q"],["Q","R"],

    // Row 4
    ["S","T"],["T","U"],["U","V"],["V","W"],["W","X"],

    // Verticals
    ["A","G"],["B","H"],["C","I"],["D","J"],["E","K"],["F","L"],

    ["G","M"],["H","N"],["I","O"],["J","P"],["K","Q"],["L","R"],

    ["M","S"],["N","T"],["O","U"],["P","V"],["Q","W"],["R","X"],

    // Diagonals
    ["A","H"],["B","I"],["C","J"],["D","K"],["E","L"],

    ["G","N"],["H","O"],["I","P"],["J","Q"],["K","R"],

    ["M","T"],["N","U"],["O","V"],["P","W"],["Q","X"]
];

const edgeElements = {};

function drawGraph() {
    //edges
    edges.forEach(edge => {

        const [from, to] = edge;

        const line =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );

        line.setAttribute("x1", positions[from][0]);
        line.setAttribute("y1", positions[from][1]);

        line.setAttribute("x2", positions[to][0]);
        line.setAttribute("y2", positions[to][1]);

        line.setAttribute("stroke", "#4DA8DA");
        line.setAttribute("stroke-width", "4");
        
        edgeElements[`${from}-${to}`] = line;

        svg.appendChild(line);

        const midX =
        (positions[from][0] +
        positions[to][0]) / 2;

        const midY =
            (positions[from][1] +
            positions[to][1]) / 2;

        const weightText =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "text"
            );

        if (positions[from][0] === positions[to][0]) {

    // Vertical edge
        weightText.setAttribute("x", midX + 15);
        weightText.setAttribute("y", midY);

        } else {

        // Horizontal edge
        weightText.setAttribute("x", midX);
        weightText.setAttribute("y", midY - 10);
        }

        weightText.setAttribute(
            "text-anchor",
            "middle"
        );

        weightText.setAttribute(
            "font-size",
            "12"
        );

        weightText.setAttribute(
            "font-weight",
            "bold"
        );

        weightText.setAttribute(
            "fill",
            "#0A4D8C"
        );

        weightText.textContent =
            getWeight(from, to);

        svg.appendChild(weightText);
            });

    //nodes
    Object.keys(positions).forEach(node => {

        const [x, y] = positions[node];

        const circle =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
            );
        
        circle.setAttribute("id", `node-${node}`);

        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", 20);

        circle.setAttribute("fill", "#BFE6FF");
        circle.setAttribute("stroke", "#0A4D8C");
        circle.setAttribute("stroke-width", "3");

        svg.appendChild(circle);

        const text =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "text"
            );

        text.setAttribute("x", x);
        text.setAttribute("y", y + 5);

        text.setAttribute("text-anchor", "middle");

        text.setAttribute("font-size", "14");

        text.textContent = node;

        svg.appendChild(text);
    });

}

loadGraph().then(() => {

    drawGraph();

});
//tracing path
const traceBtn = document.getElementById("traceBtn");

traceBtn.addEventListener("click", async () => {

    const start =
        document.getElementById("startNode")
        .value
        .toUpperCase();

    const destination =
        document.getElementById("destinationNode")
        .value
        .toUpperCase();

    const algorithm =
        document.getElementById("algorithm")
        .value;

    if (
        !positions[start] ||
        !positions[destination]
    ) {
        alert(
            "Please enter a valid node (A-X)"
        );
        return;
    }

    // Prevent same node
    if (start === destination) {
        alert(
            "Start and destination cannot be the same."
        );
        return;
    }

    try {

        const response = await fetch(
             "/trace",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    start,
                    destination,
                    algorithm
                })
            }
        );

        const data = await response.json();
        highlightPath(data.path);

        const info = algorithmInfo[algorithm];

        document.getElementById("controlPanel").innerHTML = `

        <div class="result-panel">

            <h2>${info.name}</h2>

            <p>
                <strong>Time Complexity</strong><br>
                ${info.time}
            </p>

            <p>
                <strong>Space Complexity</strong><br>
                ${info.space}
            </p>

            <p>
                <strong>Path</strong><br>
                ${data.path.join(" → ")}
            </p>

            <p>
                <strong>Total Cost</strong><br>
                ${data.totalCost ?? "N/A"}
            </p>

            <p>
                <strong>Nodes Traversed</strong><br>
                ${data.nodesTraversed}
            </p>

            <p>
                <strong>Runtime</strong><br>
                ${data.runtime.toFixed(6)} sec
            </p>

            <button id="backBtn">
                Back Home
            </button>

        </div>
    `;
        document.getElementById("backBtn")
            .addEventListener("click", () => {

            location.reload();
        });

    } catch (error) {

        console.error(error);

        alert(
            "Could not connect to backend."
        );
    }
});

//reset
function resetHighlights() {

    Object.values(edgeElements)
        .forEach(line => {

            line.setAttribute(
                "stroke",
                "#4DA8DA"
            );

            line.setAttribute(
                "stroke-width",
                "4"
            );
        });

    Object.keys(positions)
        .forEach(node => {

            const circle =
                document.getElementById(
                    `node-${node}`
                );

            circle.setAttribute(
                "fill",
                "#BFE6FF"
            );
        });
}

//highlight

function sleep(ms) {

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}
async function highlightPath(path) {

    resetHighlights();

    for(let i = 0; i < path.length; i++) {

    const node = path[i];

    const circle =
        document.getElementById(
            `node-${node}`
        );

    if(circle){

        if(i === 0){

            circle.setAttribute(
                "fill",
                "#2563EB"
            ); // blue

        } else if(i === path.length - 1){

            circle.setAttribute(
                "fill",
                "#DC2626"
            ); // red

        } else {

            circle.setAttribute(
                "fill",
                "#228B22"
            ); // green
        }

        await sleep(250);
        }
    }

    for(let i=0;i<path.length-1;i++){

        const from = path[i];
        const to = path[i+1];

        let line =
            edgeElements[`${from}-${to}`];

        if(!line){

            line =
            edgeElements[`${to}-${from}`];
        }

        if(line){

            line.setAttribute(
                "stroke",
                "#228B22"
            );

            line.setAttribute(
                "stroke-width",
                "8"
            );
            await sleep(250);
        }
    }
}