function calculateCost(graph, path) {

    let totalCost = 0;

    for (let i = 0; i < path.length - 1; i++) {

        const from = path[i];
        const to = path[i + 1];

        const edge =
            graph[from].find(
                neighbor => neighbor.node === to
            );

        totalCost += edge.weight;
    }

    return totalCost;
}

function bfs(graph, start, destination) {

    const queue = [[start]];
    const visited = new Set();

    let nodesTraversed = 0;

    while (queue.length > 0) {

        const path = queue.shift();
        const node = path[path.length - 1];

        if (visited.has(node)) {
            continue;
        }

        visited.add(node);
        nodesTraversed++;

        if (node === destination) {

            return {
                path,
                totalCost: calculateCost(graph, path),
                nodesTraversed
            };
        }

        for (const edge of graph[node]) {

            const neighbor = edge.node;

            if (!visited.has(neighbor)) {
                queue.push([...path, neighbor]);
            }
        }
    }

    return {
        path: [],
        totalCost: Infinity,
        nodesTraversed
    };
}

module.exports = bfs;