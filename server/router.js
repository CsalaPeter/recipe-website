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
    db.query(
      `SELECT id, name, img, prep, cook, diff, shortDesc, kcal FROM recipes;`,
      (error, result) => {
        reply.send(error || result);
      }
    );
  });

  fastify.get("/api/recipe/:id", (request, reply) => {
    let id = request.params.id;
    db.query(`SELECT * FROM recipes WHERE id = ${id}`, (error, result) => {
      reply.send(error || result);
    });
  });

  fastify.get("/api/search/:text", (request, reply) => {
    let text = request.params.text;
    db.query(
      `SELECT id, name, img, prep, cook, diff, shortDesc, kcal FROM recipes WHERE name LIKE '%${text}%'`,
      (error, result) => {
        reply.send(error || result);
      }
    );
  });

  fastify.post("/api/newRecipe", (request, reply) => {
    let recipe = request.body;
    db.query(
      `INSERT INTO  recipes (name, img, prep, cook, diff, serv, shortDesc, kcal, fat, carbs, fiber, protein, ingredients, steps) VALUES
      ('${recipe.name}', '${recipe.img}', '${recipe.prep}', '${recipe.cook}', '${recipe.diff}', '${recipe.serv}', '${recipe.shortDesc}', '${recipe.kcal}', '${recipe.fat}', '${recipe.carbs}', '${recipe.fiber}', '${recipe.protein}', '${recipe.ingredients}', '${recipe.steps}')`,
      (error, result) => {
        reply.send(error || result);
      }
    );
  });
}

module.exports = routes;
