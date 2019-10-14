const mysql=require("mysql");
const MySql = function(connectionParam){
  this.connection=mysql.createConnection(connectionParam)
};

//const MySql = require("./connection.js");
//const mysql = new MySql();  //USED FOR TESTING. Commented out for production.

//Three things about me: 
//   1. I prefer prototypes for creation of methods. 
//   2. I prefer promises over callbacks.
//   3. I'm a great dancer.
//All methods for the MySql constructor are created using prototypes. 
//All mysql query functions are wrapped in promises to be used in lieu of callbacks.
//My dancing skills were deemed irrelevant to this project and as such, were left out.

MySql.prototype.selectAll = function(devour) {
  return new Promise((resolve, reject) => {
    let qryStr = (devour != null) ? "SELECT * FROM burgers WHERE devoured = ?" : "SELECT * FROM burgers";
    this.connection.query(qryStr, devour, (err, dataset) => {
      if (err) {
        reject(err);
      } else {
        let datasetStr = JSON.stringify(dataset);
        let datasetParse = JSON.parse(datasetStr);
        //console.log(datasetParse);
        resolve(datasetParse);
      }
    });
  });
};

MySql.prototype.selectOne = function(burgerName) {
  return new Promise((resolve, reject) => {
    this.connection.query(
      "SELECT id FROM burgers WHERE burger_name = ?",
      burgerName,
      (err, dataset) => {
        if (err) {
          reject(err);
        } else {
          let datasetStr = JSON.stringify(dataset);
          let datasetParse = JSON.parse(datasetStr);
          //console.log(datasetParse);
          resolve(datasetParse);
        }
      }
    );
  });
};

MySql.prototype.insertOne = function(burgerName, devour) {
  return new Promise((resolve, reject) => {
    console.log(burgerName);
    this.connection.query(
      "SELECT COUNT(id) as burgerCount from burgers WHERE burger_name = ?",
      burgerName,
      (err, dataset) => {
        if (!err && dataset[0].burgerCount === 0) {
          let devourCheck = (devour === null) ? 0 : devour;
          this.connection.query(
            "INSERT INTO burgers(burger_name,devoured ) VALUES(?,?)",
            [burgerName, devourCheck],
            (err, resp) => {
              if (err) {
                reject(err);
              } else {
                //console.log(resp.insertId);
                resolve(resp.insertId);
              }
            }
          );
        } else if (!err && dataset[0].burgerCount > 0) { 
            reject("That burger already exists");
          } else {
            reject(err);
          }
      }
    );
  });
};

MySql.prototype.devourOne = function(burgerName) {
  return new Promise((resolve, reject) => {
    let devour = [{ devoured: 1 }, { burger_name: burgerName }];
    this.connection.query(
      "UPDATE burgers SET ? WHERE ?",
      devour,
      (err, resp) => {
        if (err) {
          console.log("reject")
          reject(err);
        } else {
          console.log("response = "+resp.changedRows);
          resolve(resp.changedRows);
        }
      }
    );
  });
};

module.exports = MySql

//Comments below are tests of the various methods created in this file.

//TEST the mysql insertOne and selectOne methods
// mysql
//   .insertOne("Animal Style", 0)
//   .then(resp =>
//     mysql
//       .selectOne(resp)
//       .then(dataset => {
//         console.log(dataset);
//         mysql.connection.end();
//       })
//       .catch(resp => {
//         console.log(resp);
//         mysql.connection.end()
//       })
//   )
//   .catch(resp => {
//     console.log(resp);
//     mysql.connection.end();
//   });


//Test the devourOne method
// mysql
//   .devourOne(6)
//   .then(resp => {
//     mysql
//       .selectOne(6)
//       .then((dataset) => {
//         console.log(dataset);
//       })
//       .catch(resp => {
//         console.log(resp);
//       });
//   })
//   .catch(resp => {
//     console.log(resp);
//   });

// mysql.selectAll().then((dataset) => {
//     console.log(dataset);
//     mysql.connection.end();
// })
// .catch((err) => {
//     console.log(err);
//     mysql.connection.end();
// });