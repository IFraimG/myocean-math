const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, function () {
  console.log('Server up and running on ', `http://localhost:${3000}/`);
});