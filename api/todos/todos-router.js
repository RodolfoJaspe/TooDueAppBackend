const router = require('express').Router()
// const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware')
const Todos = require("./todos-model")

router.get('/', (req, res, next) => {
    Todos.getAll()
        .then(todo => {
            res.status(200).json(todo)
        })
        .catch(err => {
            next(err)
        })
})

// router.get('/:id',checkAccountId,(req, res, next) => {
//     try{
//         res.status(200).json(req.account)  
//     }catch(err){
//         next(err)
//     }
    
// })

// router.post('/',checkAccountPayload,checkAccountNameUnique, async (req, res, next) => {
//     try{
//         const newAccount = await Accounts.create(req.body)
//         res.status(201).json(newAccount)
//     }catch(err){
//         next(err)
//     }
// })

// router.put('/:id', checkAccountId,checkAccountPayload,checkAccountNameUnique, async(req, res, next) => {
//     try{
//         const updatedAccount = await Accounts.updateById(req.params.id, req.body)
//         res.status(200).json(updatedAccount)
//     }catch(err){
//         next(err)
//     }
// });

// router.delete('/:id', checkAccountId,(req, res, next) => {
//     Accounts.deleteById(req.params.id)
//         .then(account => {
//             res.status(200).json(account)
//         })
//         .catch(err => {
//             next(err)
//         })
// })

router.use((err, req, res, next) => { 
    res.status(500).json({ message: err.message, stack: err.stack })
})

module.exports = router;