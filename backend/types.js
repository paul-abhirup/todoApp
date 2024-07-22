const zod = require("zod");

/**
 * //create TODO
 * {
 *  title: string,
 * description: string,
 * }J
 * //update TODO
 * {
 *  id: string
 * }
 */

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo,
  updateTodo,
};
