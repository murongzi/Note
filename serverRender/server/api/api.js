import express from 'express';

import http from 'http';

const api = express.Router();

api.route('*').all((req, res) => {
    const path = req.originalUrl;

    res.send({
        "home":[
            {
                "id":1,
                "name":"tom",
                "age":12
            },
            {
                "id":2,
                "name":"tom2",
                "age":12
            },
            {
                "id":3,
                "name":"tom3",
                "age":12
            },
            {
                "id":4,
                "name":"tom4",
                "age":12
            }
        ]
    });
});



export default api;