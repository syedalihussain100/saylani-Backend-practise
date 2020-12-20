const express = require("express");
const app = express();
const path = require("path");

const members = [
  {
    id: 1,
    name: "Zaid",
    email: "zaid.@gmail.com",
  },
  {
    id: 2,
    name: "Hammad",
    email: "hammad@gmail.com",
  },
  {
    id: 3,
    name: "Muhemin",
    email: "muhemin@gmail.com",
  },
];

app.get("/api/members", (req,res) => {
  res.json(members);
});
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

//static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Your Server is Running on ${PORT}`));
