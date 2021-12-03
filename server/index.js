const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


const ctrl = require('./controller.js')
app.get("/api/fortune", ctrl.getFortune);
app.post('/api/fortune',ctrl.addFortune)
app.delete('/api/fortune/:index',ctrl.deleteFortune)
app.put('/api/fortune/:index',ctrl.encryptFortune)



app.listen(4000, () => console.log("Server running on 4000"));
