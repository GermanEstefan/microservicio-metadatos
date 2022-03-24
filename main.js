const express = require('express');
const { fileAnalyse } = require('./controllers/file');
const expressApp = express();
require('dotenv').config();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

//CONSTS
const PORT = process.env.PORT;

//Middlewares
expressApp.use(express.json());
expressApp.use(express.static('public'));

//Routes
expressApp.post('/api/fileanalyse', upload.single('upfile'), fileAnalyse)

//Up server
expressApp.listen(PORT, () => console.log('Server is runnin in the port ' + PORT));