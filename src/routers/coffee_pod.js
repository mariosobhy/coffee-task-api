const express = require("express");
const coffeePodController = require("../controllers/coffee_pod");
const router = new express.Router();

router.route("/coffeePods").get(coffeePodController.getList);
router.route("/coffeePods").post(coffeePodController.createCoffeePod);

module.exports = router;