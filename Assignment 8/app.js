'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
// define endpoint for exercise 2 here

app.get('/math/circle/:r', (req,res) => {
    const radius = parseFloat(req.params.r);

    if(isNaN(radius) || radius <= 0) {
        return res.status(400).json({ error: 'Invalid radius'});
    }

    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    const circleDetails = {
        area: area,
        circumference: circumference
    };
    res.json(circleDetails);
});

app.get('/hello/name', (req,res) => {
    const {first, last} = req.query;
    
    if(!first && !last) {
        return res.status(400).send('Missing Required GET parameter: first, last');
    } else if (!first) {
        return res.status(400).send('Missing Required GET parameter: first');
    } else if(!last) {
        return res.status(400).send('Missing Required GET parameter: last');
    }

    const greeting = 'Hello ' + first + ' ' +  last;
    res.type('text').send(greeting);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);