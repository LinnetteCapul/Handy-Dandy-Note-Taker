const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const notes = require("express").Router();

notes.get("/notes", (req, res) => {
    console.info(`${req.method} request received for handy dandy notes.`);
    fs.readFile("./db/db.json", (err, data) => res.json(JSON.parse(data)));
});

