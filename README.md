# Ye Olde Burger Shoppe

## Description
This project creates a list of burgers and included burgers that you may add. Then you can choose to devour a burger by clicking on the the burger itsef. Each burger is added as a button and there  are actions tied to them change each from undevoured to devoured. There is no reverse method. After all, how does one un-eat a burger?

## Requirements
* MySql/Maria/PostGres or some other database server.
* NodeJS with Express, Express-Hanlebars, and MySql modules.
* A database client capable of accessing the the database server with your specified credentials.

## Instructions
After you have cloned the repository. You will need to determine which database server to use and where it will be installed. This application has been tested using MySql Server installed locally, MariaDB Server insalled on an AWS RDS Server, and Heroku with Jaws MariaDB add-on. After making determinations regarding establishing your database. You will need to set it up and establish credentials. The connectionParam.js file contains a commented example of how this may look. Use only as an example, the parameters contain therein are not valid. A pdf file explaining how to set this up via Heroku is found at the root of this repository. 

Two files are provided in the _/db_ folder: schema.sql and seeds.sql. The former provide the table setup and the latter the data for that table. You may have to modify the schema.sql table to reflect you database as the default database name may be different and will definitely be so if using Heroku. 

A database client will be required to build establish access, build the tables, and provide initial seed data for test and demonstraton. This project was built using MySql Workbench which works for both MariaDB and MySql. However third party clients like HeidiSql or Toad will also work.

After database connections are established, you will need to modify the orm.js file and the burger.js file to reflect your access. The connectionParam.js file is used only as an example of a setup and is not actually part of used code. 


If not installed you will need to install NodeJS server and the npm packages. After NodeJS is installed, you may go to the root folder for the repository and run _npm install_. The package.json file will install the packages automatically.

## Built With
* Visual Studio Code
* MySql Workbench
* NodeJS with packages added; see _package.json_ dependencies for details.

## Contributions
* This package was built as a solo project.

## Acknowledgments
Richard Baird
Matt Banz
Katie Sexton
Andi Carlstrom
