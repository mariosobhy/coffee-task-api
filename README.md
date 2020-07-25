# README


## Things you may want to setup the project:

- Install Node.js, mongoDb and npm

- Start mongoDb server by running `mongod --dbpath {your db data path}`

- After that you will run `npm i` to install the dependencies needed for this project

- Then you will run `npm run start or node src/app.js` to run your server

## API Documentation:

- Here's a link of postman doucumentation [here](https://documenter.getpostman.com/view/910736/T1DqeveR?version=latest)
- You can filter by any field 
- List of filters 
-- http://localhost:3000/coffeeMachines?productType=COFFEE_MACHINE_LARGE
-- http://localhost:3000/coffeePods?modelType=COFFEE_POD_LARGE
-- http://localhost:3000/coffeePods?modelType=ESPRESSO_POD&coffeeFalvor=COFFEE_FLAVOR_VANILIA
-- http://localhost:3000/coffeeMachines?productType=ESPRESSO_MACHINE
-- http://localhost:3000/coffeePods?modelType=COFFEE_POD_SMALL
-- http://localhost:3000/coffeePods?modelType=COFFEE_POD_LARGE
-- http://localhost:3000/coffeePods?packSize=7 dozen