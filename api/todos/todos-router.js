const router = require("express").Router()
const Todos = require("./todos-model")

router.get("/:id", ( req, res, next ) => {
    Todos.getTodos(req.params.id)
        .then(todos => {
            console.log(todos)
            res.status(200).json(todos)
        }).catch(err => {
            next(err)
        })
})

router.post("/", async ( req, res, next ) => {
    try{
        const todo = await Todos.createTodo(req.body)
        console.log(todo)
        res.status(201).json(todo)
    }catch(err){
        next(err)
    }
})

router.delete("/:id", ( req, res, next ) => {
    Todos.deleteTodo(req.params.id)
        .then(todo => {
            res.status(200).json(todo)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router
