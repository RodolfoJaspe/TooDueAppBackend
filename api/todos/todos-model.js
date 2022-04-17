const db = require("../../data/db-config.js")

const getAll = () => {
    return db("todos")
}

// const getById = id => {
//     return db("accounts").where("id",id).first()    
// }

// const create = async ({name, budget}) => {
//     name = name.trim()
//     const [id] = await db("accounts").insert({name,budget})
//     return getById(id)
// }

// const updateById = async (id, {name, budget}) => {
//     await db("accounts").where("id",id).update({name,budget})
//     return getById(id)
// }

// const deleteById = async id => {
//     await db("accounts").where("id",id).delete()
//     return getById(id)
// }

module.exports = {
  getAll,
//   getById,
//   create,
//   updateById,
//   deleteById,
}
