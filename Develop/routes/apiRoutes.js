// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const app = require("express").Router();

//MYSQL CONNECTION
const connection = require("../db/connection");


app.get("/api/notes", function(req, res) {
    connection.query("SELECT * FROM notes", (err, response) => {
        return res.json(response);
    })
});

// ---------------------------------------------------------------------------

app.post("/api/notes", function(req, res) {
    connection.query("INSERT INTO notes SET ?", req.body, (err, response) => {
        return res.json(response);
    })
});

app.delete("/api/notes/:id", function(req, res) {

    const id = req.params.id;

    connection.query("DELETE FROM notes WHERE ?", { id }, (err, response) => {
        return res.json(response);
    })
});

module.exports = app;