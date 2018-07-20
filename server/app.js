const express = require('express');
const path = require('path');
// --- REMOVE MORGAN PRODUCTION --- //
const morgan = require('morgan'); // eslint-disable-line import/no-extraneous-dependencies

const app = express();

// --- MIDDLE-WARE --- //
app.use(express.json());
app.use(morgan('dev'));

// --- STATIC FILES --- //
app.use(express.static(path.resolve(__dirname, '../public')));

module.exports = app;
