const CoffeePod = require("../models/coffee_pod");

module.exports = {
    getList: (req, res) => {
        CoffeePod.find(req.query).then((data) => {
          res.send({
            message: "Coffee machines retrieved successfully.",
            data: data
          });
        }).catch((error) => {
          res.status(500).send();
        })
    },
    createCoffeePod: (req, res) => {
        const coffeePod = new CoffeePod(req.body);
        coffeePod.save().then((data) => {
          res.status(201).send(data);
        }).catch((error) => {
          res.status(500).send();
        })
    }
}