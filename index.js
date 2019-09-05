const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Página Inicial");
});

app.listen(3000);

