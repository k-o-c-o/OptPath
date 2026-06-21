function dijkstra(graph, start, destination) {

    const distances = {};
    const previous = {};
    const visited = new Set();

    let nodesTraversed = 0;

    for (const node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[start] = 0;

    while (true) {

        let current = null;
        let shortestDistance = Infinity;

        for (const node in distances) {
            if (
                !visited.has(node) &&
                distances[node] < shortestDistance
            ) {
                shortestDistance = distances[node];
                current = node;
            }
        }

        if (current === null) {
            break;
        }

        visited.add(current);
        nodesTraversed++;

        if (current === destination) {
            break;
        }

        for (const edge of graph[current]) {

            const neighbor = edge.node;
            const weight = edge.weight;

            const newDistance =
                distances[current] + weight;

            if (newDistance < distances[neighbor]) {

                distances[neighbor] = newDistance;
                previous[neighbor] = current;
            }
    }
    }

    const path = [];

    let currentNode = destination;

    while (currentNode !== null) {
        path.unshift(currentNode);
        currentNode = previous[currentNode];
    }

    return {
    path,
    totalCost: distances[destination],
    nodesTraversed
    };
}

module.exports = dijkstra;