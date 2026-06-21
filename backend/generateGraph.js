const edges = [

    ["A","B"],["B","C"],["C","D"],["D","E"],["E","F"],
    ["G","H"],["H","I"],["I","J"],["J","K"],["K","L"],
    ["M","N"],["N","O"],["O","P"],["P","Q"],["Q","R"],
    ["S","T"],["T","U"],["U","V"],["V","W"],["W","X"],
    ["A","G"],["B","H"],["C","I"],["D","J"],["E","K"],["F","L"],
    ["G","M"],["H","N"],["I","O"],["J","P"],["K","Q"],["L","R"],
    ["M","S"],["N","T"],["O","U"],["P","V"],["Q","W"],["R","X"],
    ["A","H"],["B","I"],["C","J"],["D","K"],["E","L"],
    ["G","N"],["H","O"],["I","P"],["J","Q"],["K","R"],
    ["M","T"],["N","U"],["O","V"],["P","W"],["Q","X"]
];

const graph = {};

edges.forEach(([a, b]) => {

    //horizontal edges : 2-4
    //vertical edges   : 3-5
    //diagonal edges   : 6-8
    let weight;

    const horizontal =
        Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) === 1;

    const diagonal = [
        ["A","H"],["B","I"],["C","J"],["D","K"],["E","L"],
        ["G","N"],["H","O"],["I","P"],["J","Q"],["K","R"],
        ["M","T"],["N","U"],["O","V"],["P","W"],["Q","X"]
    ].some(
        ([x,y]) =>
            (x===a && y===b) ||
            (x===b && y===a)
    );

    if (diagonal) {

        weight =
            Math.floor(Math.random() * 3) + 6; // 6–8

    } else if (horizontal) {

        weight =
            Math.floor(Math.random() * 3) + 2; // 2–4

    } else {

        weight =
            Math.floor(Math.random() * 3) + 3; // 3–5
    }

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push({
        node: b,
        weight
    });

    graph[b].push({
        node: a,
        weight
    });
});

console.log(
    JSON.stringify(graph, null, 4)
);