const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello ACT 2");
});

app.post("/signup", (req, res) => {
    const body = req.body;

    console.log(body);

    res.status(200).send("OK I received!");
});

app.listen(5002, () => {
    console.log("Server is running on port 5002");
});