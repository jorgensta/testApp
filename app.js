const express = require("express");
const app = express();

app.use("/", (req, res) => res.send("Ny branch for helvette!"));

app.listen(8000, () => console.log("listening on 8000"));
