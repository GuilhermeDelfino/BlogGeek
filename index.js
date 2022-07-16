const express = require('express');
const cors = require('cors');

const PORT = 3000;
const HOST = "localhost";
const app = express();

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/view')
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.render("index");
})

app.listen(PORT, () => console.log(`http://${HOST}:${PORT}/`));