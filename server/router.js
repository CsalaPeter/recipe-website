const fastify = require("fastify")();
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "recipeDB",
});

async function routes(fastify, _options) {
  fastify.get("/api/", (_request, reply) => {
    db.query(`SELECT * FROM recipes;`, (error, result) => {
      reply.send(error || result);
    });
  });
}

module.exports = routes;
