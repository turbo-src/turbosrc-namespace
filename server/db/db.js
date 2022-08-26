const { Sequelize } = require("sequelize");

const dbUrl =
  process.env.DATABASE_URL ||
  process.env.DOCKER_DATABASE_URL ||
  "postgres://localhost:5433/namespace-db";

const db = new Sequelize(dbUrl, {
  logging: false,
});

module.exports = db;
