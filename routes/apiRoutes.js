const notesData = require("../db/db.json");
const uniqId = require("uniqid");


module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(notesData));

    app.post("/api/notes", (req,res) => {
        req.body["id"] = uniqId();
        notesData.push(req.body)
        res.json(true);
    })

    app.get("/api/notes/:id", (req, res) => {
        const id = (value) => value.id === req.params.id;
        notesData.findIndex(id);
        res.json(notesData);
    })

    app.delete("/api/notes/:id", (req, res) => {
        const id = (value) => value.id === req.params.id;
        notesData.splice(notesData.findIndex(id), 1);
        res.json(notesData);
    })

};