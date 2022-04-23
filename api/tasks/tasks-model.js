const db = require("../../data/db-config.js")

const getTasks = (todo_id) => {
    const tasks = db("tasks").where({todo_id})
    return tasks
}

const getTask = (task_id) => {
    return db("tasks").where({task_id}).first()
}

const createTask = (task) => {
    return db
        .insert(task)
        .into("tasks")
        .returning("*")
        .then(rows => {
            return rows[0]
        })
}

const deleteTask = async (task_id) => {
    const deletedTask = await getTask(task_id)
    await db("tasks").where({task_id}).delete()
    return deletedTask
}

module.exports = {
    getTasks,
    createTask,
    deleteTask
}