const db = require("../../data/db-config.js")

const getAllUsers = () => {
    return db("users")
}

const getUser = (user_id) => {
    console.log(user_id)
    const user = db("users").where({user_id}).first()
    console.log("from the getUser", user)
    return user
}

function findBy(filter){ 
    return db("users").where(filter).first()
}

async function createUser(user) {
    console.log('signup model')

    return db
        .insert(user)
        .into("users")
        .returning("*")
        .then(rows => {
            return rows[0]
        })
}   ///    done    ///

const deleteUser = async (id) => {
    await db("users").where("user_id",id).delete()
}

const changePassword = async(id, newPassword) => {
    user_id = await db("users").where("user_id",id).update({ password: newPassword });
    return db("users").where({user_id})
}

const changeUsername = async(id, newUsername) => {
    user_id = await db("users").where("user_id",id).update({ user_name: newUsername });
    return db("users").where({user_id})
}

const addEmail = async(id, email) => {
    user_id = await db('users').where("user_id", id).update({email: email})
    return db('users').where({user_id})
}


module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  findBy,
  changePassword,
  changeUsername,
  addEmail
}
