const express = require('express');
const app =  express();
const port = 8080;

app.get("/",(req,res)=>{
    res.send("Hii Am A contributor.");
})

app.listen(port,()=>{
  console.log(` Server running at http://localhost:${port}`)
})