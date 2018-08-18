const express = require("express");

const router = express.Router();

// Importing our Burger.js model
const burger = require('../models/burger.js');

// ========================ROUTES=================== //
router.get('/', (req, res) => {
    burger.all(data => {
        let burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(
    req.body.burger_name, function(result) {
    res.json({id:result.id});
    console.log('success');
  });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    let id = req.params.id;

    console.log("condition", condition)

    burger.update({
        devoured: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
})

module.exports = router
