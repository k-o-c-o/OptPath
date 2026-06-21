//heuristics based on node position
const positions = {

    A:[0,0],
    B:[1,0],
    C:[2,0],
    D:[3,0],
    E:[4,0],
    F:[5,0],

    G:[0,1],
    H:[1,1],
    I:[2,1],
    J:[3,1],
    K:[4,1],
    L:[5,1],

    M:[0,2],
    N:[1,2],
    O:[2,2],
    P:[3,2],
    Q:[4,2],
    R:[5,2],

    S:[0,3],
    T:[1,3],
    U:[2,3],
    V:[3,3],
    W:[4,3],
    X:[5,3]
};

function heuristic(node, destination) {
    const [x1, y1] = positions[node];
    const [x2, y2] = positions[destination];

    return Math.sqrt(
        (x1 - x2) ** 2 +
        (y1 - y2) ** 2
    );
}

function astar(graph, start, destination) {

    const openSet = [start];

    const gScore = {};
    const fScore = {};
    const previous = {};

    let nodesTraversed = 0;

    for (const node in graph) {
        gScore[node] = Infinity;
        fScore[node] = Infinity;
        previous[node] = null;
    }

    gScore[start] = 0;
    fScore[start] = heuristic(start, destination);

    while (openSet.length > 0) {

        let current = openSet[0];

        for (const node of openSet) {
            if (fScore[node] < fScore[current]) {
                current = node;
            }
        }

        nodesTraversed++;

        if (current === destination) {

            const path = [];
            let temp = destination;

            while (temp !== null) {
                path.unshift(temp);
                temp = previous[temp];
            }

            return {
                path,
                totalCost: gScore[destination],  
                nodesTraversed
            };
        }

        openSet.splice(openSet.indexOf(current), 1);

        for (const edge of graph[current]) {

            const neighbor = edge.node;
            const weight = edge.weight;
            const tentativeG =gScore[current] + weight;

            if (tentativeG < gScore[neighbor]) {

                previous[neighbor] = current;

                gScore[neighbor] = tentativeG;

                fScore[neighbor] =
                    tentativeG +
                    heuristic(neighbor, destination);

                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    return {
    path: [],
    totalCost: Infinity,
    nodesTraversed
    };
}

module.exports = astar;