const express = require('express');
const server = express();
const path = require('path');

server.use('/public', express.static(path.join(__dirname, "/public")));

server.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 3282;
server.listen(port, ()=>{console.log(`listening on port ${port}`)});
