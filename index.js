const express = require("express");
const app = express();
const path = require("path");
const members = require('./Members');



//Get All Members
app.get("/api/members", (req,res) => {
  res.json(members);
});

app.post('/data',(req,res)=>{
    res.send("There is so many Posts!!")
})

/// All function call (curl -X POST http://localhost:3001/data ) interminal-side

app.all("/all_data",(req,res)=>{
    res.send("Hello From all() Routing-Function!!")
})

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

//static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Your Server is Running on ${PORT}`));
