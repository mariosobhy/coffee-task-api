const CoffeeMachine = require("../models/coffee_machine");

module.exports = {
  getList: (req, res) => {
      CoffeeMachine.find(req.query).then((data) => {
        res.send({
          message: "Coffee machines retrieved successfully.",
          data: data
        });
      }).catch((error) => {
        res.status(500).send();
      })
  },
  createCoffeeMachine: (req, res) => {
      const coffeeMachine = new CoffeeMachine(req.body);
      coffeeMachine.save().then((data) => {
        res.status(201).send(data);
      }).catch((error) => {
        res.status(500).send();
      })
  }
}