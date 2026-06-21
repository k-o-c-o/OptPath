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
        nodesTraversed
    };
}

module.exports = dfs;