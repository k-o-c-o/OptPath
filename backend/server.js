//imports
const express = require("express");
const cors = require("cors");

const graph = require("./graph");
const bfs = require("./algorithms/bfs");
const dfs = require("./algorithms/dfs");
const dijkstra = require("./algorithms/dijkstra");
const astar = require("./algorithms/astar");

const { performance } = require("perf_hooks");
const path = require("path");

//application object
const app = express();

//enable cors and json parsing
app.use(cors());
app.use(express.json());
app.use(
    express.static(
        path.join(__dirname, "../frontend")
    )
);

const PORT = process.env.PORT || 5000;

app.get("/graph", (req, res) => {
    res.json(graph);
});

app.post("/trace", (req, res) => {

    const { start, destination, algorithm } = req.body;

    if (!start || !destination) {
        return res.status(400).json({
            error: "Start and destination required"
        });
    }

    const startTime = performance.now();

    let result;

   if (algorithm === "bfs") {
        result = bfs(graph, start, destination);
    }
    else if (algorithm === "dfs") {
        result = dfs(graph, start, destination);
    }
    else if (algorithm === "dijkstra") {
        result = dijkstra(graph, start, destination);
    }
    else if (algorithm === "astar") {
        result = astar(graph, start, destination);
    }
    else {
        return res.status(400).json({
            error: "Unsupported algorithm"
        });
    }

    const endTime = performance.now();

    result.runtime = (endTime - startTime) / 1000;

    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});