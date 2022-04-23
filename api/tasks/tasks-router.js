const router = require("express").Router();
const Tasks = require("./tasks-model");

router.get("/:id", ( req, res, next ) => {
    Tasks.getTasks(req.params.id)
        .then(task => {
            res.status(200).json(task)
        }).catch(err => {
            next(err)
        })
})

router.post("/", async ( req, res, next ) => {
    try{
        const task = await Tasks.createTask(req.body)
        res.status(201).json(task)
    }catch(err){
        next(err)
    }
})

router.delete("/:id", ( req, res, next ) => {
    Tasks.deleteTask(req.params.id)
        .then(task => {
            res.status(200).json(task)
        }).catch(err => {
            next(err)
        })
})

module.exports = router