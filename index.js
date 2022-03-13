const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('index', { message: 'Hello world' });
});

app.get("/api", (req, res) => {
    res.status(200).send('Hello world !');
})

const listener = server.listen(8000, function() {
    console.log(`Your app is listening on port ${listener.address().port}`);
})
