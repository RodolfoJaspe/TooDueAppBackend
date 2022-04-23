const db = require("../../data/db-config.js")

const getTodos = (user_id) => {
    console.log(user_id)
    const todos = db("todos").where({user_id})
    console.log(todos)
    return todos
}

const getTodo = (todo_id) => {
    return db("todos").where({todo_id}).first()
}

const createTodo = (todo) => {
    console.log(todo)
    return db
        .insert(todo)
        .into("todos")
        .returning("*")
        .then(rows => {
            return rows[0]
        })
}

const deleteTodo = async (todo_id) => {
    const deletedTodo = await getTodo(todo_id) 
    await db("todos").where({todo_id}).delete()
    return deletedTodo
}

module.exports = {
    getTodos,
    createTodo,
    deleteTodo
}