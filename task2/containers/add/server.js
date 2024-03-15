const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const {X, Y} = req.body;
    const result = Number(X) + Number(Y)
    res.send({ "x": X, "y": Y, "result": result });  
});

app.listen(8080, () => {
    console.log("Server is up on 8080");
});