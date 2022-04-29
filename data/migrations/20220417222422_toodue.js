/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments("user_id");
            table.string("user_name", 128).notNullable().unique();
            table.string("password", 128).notNullable();
        })
        .createTable('todos', table => {
            table.increments("todo_id");
            table.string("todo_name", 128).notNullable();
            table.integer("user_id")
                .notNullable()
                .unsigned()
                .references("users.user_id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
        })
        .createTable("tasks", table => {
            table.increments("task_id")
            table.string("task_description").notNullable()
            table.integer("todo_id")
                .notNullable()
                .unsigned()
                .references("todos.todo_id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.boolean("completed")
                .defaultTo(false)
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("todos")
    .dropTableIfExists("users")
};
