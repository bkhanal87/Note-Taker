const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoute")(app);
require("./routes/htmlRoutes")(app);

module.exports = (app) => {
    app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
    app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));
    app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
};

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
});