const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '/build')));

// app.get("/welcome/1", function (요청, 응답) {
//   응답.sendFile(path.join(__dirname, "/build/index.html"));
// });

app.get('/', (res, req) => {
    req.sendFile(path.join(__dirname, '/build/index.html'));
  })

app.get('*', (res, req) => {
  req.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT, ()=>{
  console.log("listening on 3000");
});