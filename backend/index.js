const express = require("express");
const cors = require("cors");
const userRoute = require("./Routes/userRoute");

const questionRoute = require("./Routes/questionRoute")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoute);
app.use("/question",questionRoute);


  
  



app.listen(5000);










