require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static("public"))

app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.listen(process.env.PORT || 3333, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});