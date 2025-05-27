const express = require("express");
const login = require('./routes/login');
const test = require('./routes/test');
const logout = require('./routes/logout');
const cors = require('cors');

app.use(cors());
const app=express();

app.use(express.json());

app.post('/login', login);
app.post('/test', test);
app.post('/logout', logout);

app.listen(40444, () => {
        console.log('Сервер запущен на порту 40444')});