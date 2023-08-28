const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser')
const appRoute = require('./routes/route.js')


const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(express.json());
app.use(cors());

/** routes */
app.use('/api', appRoute);

app.use(express.static(path.join(__dirname, "./client/build")));
console.log(path.join(__dirname, "./client/build"));

app.get("*", function(_,res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function(err) {
            res.status(500).send(err);
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
