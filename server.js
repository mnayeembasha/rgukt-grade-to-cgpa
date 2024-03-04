const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;


// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname)));

//Define a route to handle the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
