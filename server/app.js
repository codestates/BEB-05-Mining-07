const queue = require('./queue');
const express = require('express')
const cookieParser = require("cookie-parser");
const app = express()
const cors = require("cors");
const port = 8001
//랜덤 다이스 
const diceNum = 80;
const clearFlag = false; //더이상호출 불가
dice = new queue()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
        methods: ["GET", "POST", "OPTIONS"],
    })
);
app.use(cookieParser());
app.get('/getdice', (req, res) => {
    res.status(200).send({
        message: 200,
        data: dice.pop()
    });
})

app.listen(port, () => {
    for(var i=1 ; i <= 80; i++){
        dice.add(i)
    }
    dice.storage.sort(() => Math.random() - 0.5);
    console.log(`listening on port ${port}`)
})