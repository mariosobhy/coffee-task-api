const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/coffee-contacts-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then((result) => {
  console.log("Connected to database.")
}).catch((error) => {
  console.log(error)
})