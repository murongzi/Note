/*var express = require('express');
var fs = require('fs');*/
import express from 'express';
import fs from 'fs';
import path from 'path';

import api from './api/api';

import serverRender from './api/router';

var port = 8800;

var app = express();

//全局配置
app.set('views', path.join(__dirname, '../dist'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/../dist')));

app.use('/api', api);

app.use('*', serverRender);

app.listen(port, () => console.log(`server started，at ${port}`));
