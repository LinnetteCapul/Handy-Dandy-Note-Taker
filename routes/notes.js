const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const notes = require("express").Router();

notes.get("/notes", (req, res) => {
    console.info(`${req.method} request received for handy dandy notes.`);
    fs.readFile("./db/db.json", (err, data) => res.json(JSON.parse(data)));
});

notes.post("/notes", (req, res) => {
    console.info(`${req.method} request received to add a handy dandy note`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        fs.readFile("./db/db.json", (err, data) => {
            let storedData = JSON.parse(data);
            storedData.push(newNote);

            fs.writeFile(`./db/db.json`, JSON.stringify(storedData), (err) =>
                err
                    ? console.error(err)
                    : res.json(`Your handy dandy note has been written into JSON file`)
            );
        });
    }
});

module.exports = notes;