const MySql = require("../config/orm");
const sqlConnectionParam = require("../config/connectionParam")
const mysql = new MySql(sqlConnectionParam);
const connection = mysql.connection;

burgers = {
  status: function(devourBool){mysql
    .selectAll(devourBool)
    .then(dataset => {
      console.log(dataset);
      connection.end()
      return dataset;
    })
    .catch(err => {
      console.log(err);
      connection.end()
      return "error";
    })
  },
  devour: function(burgerID){
      mysql.devourOne(burgerID)
      .then((resp) => {
          if(resp > 0){
            mysql.connection.end();
            console.log(`Burger ${burgerID} devoured`);
            return(true);
          } else{
              console.log(`Burger ${burgerID} not devoured`);
              mysql.connection.end();
              return("Burger not devoured");
            }
      })
      .catch((err) => {
          console.log(err);
          return("Devour error, check server for detail");
        })
  },
  add: function (burgerName){
      mysql.insertOne(burgerName)
      .then((resp) => {
          console.log(`burger ${resp} added`)
          mysql.connection.end()
          return(resp);
      })
      .catch((err) => {
        console.log(err);
        mysql.connection.end();
        return(err);
      });
  }
 
};

module.exports = burgers
