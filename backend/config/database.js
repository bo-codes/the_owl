// this will allow us to load the db config env vars from-
// the .env file into the config/index.js file

// importing from the config/index.js file
const config = require("./index");

// importing the db obj and setting it to db var
const db = config.db;
// pulling information from each key of the db obj
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
    development: {
        username,
        password,
        database,
        host,
        dialect: "postgres",
        seederStorage: "sequelize",
    },
    production: {
        // when we deploy our app to production, our db will be read from a URL path-
        // instead of a username, password, and db name combination
        use_env_variable: "DATABASE_URL",
        dialect: "postgres",
        seederStorage: "sequelize",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};
