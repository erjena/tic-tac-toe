const express = require('express');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, '/../public')));


app.listen(7010, () => console.log('Listening on port, 7010'));