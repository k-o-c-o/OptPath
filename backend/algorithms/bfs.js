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
        nodesTraversed
    };
}

module.exports = bfs;