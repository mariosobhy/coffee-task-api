const express = require("express");
require("./db/mongoose");
const coffeeMachineRouter = require('./routers/coffee_machine');
const coffeePodRouter = require('./routers/coffee_pod');

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(coffeeMachineRouter);
app.use(coffeePodRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});