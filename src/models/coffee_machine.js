const mongoose = require("mongoose");

const coffeeMachineSchema = new mongoose.Schema({
  productCode: {
    type: String,
  },
  modelType: {
    type: String,
    enum: ['BASE_MODEL', 'PREMIUM_MODEL', 'DELUXE_MODEL'],
    default: 'BASE_MODEL',

  },
  productType: {
    type: String,
    enum: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE'],
    default: 'COFFEE_MACHINE_SMALL',

  },
  waterLine: {
    type: Boolean,
  } 
});

const CoffeeMachine = mongoose.model("CoffeeMachine", coffeeMachineSchema);
module.exports = CoffeeMachine;