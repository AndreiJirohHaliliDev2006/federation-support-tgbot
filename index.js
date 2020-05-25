var express = require("express");
var app = express();
var bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => {
    res.json({ ok: true, description: 'Hello, world!'})
})

app.listen(process.env.PORT, () => console.log('Your app is listening on port '+ process.env.PORT))