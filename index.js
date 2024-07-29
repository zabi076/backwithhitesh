 require ('dotenv').config()

const express = require("express");


const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/facebook",(req,res)=>{

  res.send('zohaibDotcom')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login to continue</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
