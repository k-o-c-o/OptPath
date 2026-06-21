function calculateCost(graph, path) {

    let totalCost = 0;

    for(let i = 0; i < path.length - 1; i++) {

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

function dfs(graph, start, destination) {

    const stack = [[start]];
    const visited = new Set();

    let nodesTraversed = 0;

    while (stack.length > 0) {

        const path = stack.pop();
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

        const neighbors = [...graph[node]].reverse();

        for (const edge of neighbors) {

            const neighbor = edge.node;

            if (!visited.has(neighbor)) {
                stack.push([...path, neighbor]);
            }
        }
    }

    return {
        path: [],
        totalCost: Infinity,
        nodesTraversed
    };
}

module.exports = dfs;