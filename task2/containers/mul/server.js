const express = require('express');
const app = express();

app.post('/', (req, res) => {
    const {X, Y} = req.body;
    const result = Number(X) * Number(Y)
    res.status(200).json({ "x": X, "y": Y, "result": result });  
});

app.listen(8080, () => {
    console.log('Server is up on 8080');
    }
);