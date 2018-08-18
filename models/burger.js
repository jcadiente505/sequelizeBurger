const orm = require('../config/orm');

const burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(vals, cb) {
      orm.insertOne("burgers", 'burger_name', vals, function(res) {
        cb(res);
      });
    },
    update:function(objColVals, condition, cb){
      orm.updateOne('burgers', objColVals, condition, function(result){
          cb(result);
      });
    },
    delete: function(condition, cb){
      orm.DeleteOne('burgers', condition, function(result){
        cb(result)
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  