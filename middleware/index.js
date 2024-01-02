//First run this file the  take url something like(http://localhost:3000/) then paste this
//link in postman to test
//dumb way of input validation and authentication

const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username !== "harkirat" || password !== "pass") {
        res.status(400).json({ "msg": "Something's up with your inputs" });
        return;
    }

    if (kidneyId !== "1" && kidneyId !== "2") {
        res.status(408).json({ "msg": "Something's up with your inputs" });
        return;
    }

    // TODO: Handle the kidneyId logic here
    res.json({
        "msg": "your kidney is fine",

    });
});


app.listen(3000);
