const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);
app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 📝`)
);