const MySql = require("../config/orm");
//const sqlConnectionParam = require("../config/connectionParam")
const mysql = new MySql(process.env.JAWSDB_MARIA_URL);
//const connection = mysql.connection;

burgers = {
  select: function(devourBool){
    return mysql
    .selectAll(devourBool)
    .then(dataset => {
      console.log(dataset);
      //connection.end()
      return dataset;
    })
    .catch(err => {
      console.log(err);
      //connection.end()
      return "error";
    })
  },
  devour: function(burgerName){
      return mysql
      .devourOne(burgerName)
      .then((resp) => {
          if(resp > 0){
            //mysql.connection.end();
            console.log(`Burger ${burgerName} devoured`);
            return(`Burger ${burgerName} devoured`);
          } else{
              console.log(`Burger ${burgerName} not devoured`);
              //mysql.connection.end();
              return(`Burger ${burgerName} not devoured`);
            }
      })
      .catch((err) => {
          console.log(err);
          return("Devour error, check server for detail");
        })
  },
  add: function (burgerName){
      return mysql.insertOne(burgerName)
      .then((resp) => {
          console.log(`burger ${resp} added`)
          //mysql.connection.end()
          return(`burger ${resp} added`);
      })
      .catch((err) => {
        console.log(err);
        //mysql.connection.end();
        return(err);
      });
  }
 
};

module.exports = burgers
