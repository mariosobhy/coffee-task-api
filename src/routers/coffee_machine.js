const express = require("express");
const coffeeMachineController = require("../controllers/coffee_machine");
const router = new express.Router();

router.route("/coffeeMachines").get(coffeeMachineController.getList);
router.route("/coffeeMachines").post(coffeeMachineController.createCoffeeMachine);

module.exports = router;