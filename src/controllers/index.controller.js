const {Pool} = require('pg')

const pool = new Pool({
    host: 'dpg-coqsaoq0si5c7397sas0-a.virginia-postgres.render.com',
    user:'banano',
    password: 'gRVazgauWZmW0kwf9neG1MwG4NOEP79Z',
    database: 'node_otve',
    port: '5432',
    ssl: {
        rejectUnauthorized: false // Opcional, dependiendo de tu configuración de SSL/TLS
    }

})

const getUsers = async (req,res) =>{
    const response = await pool.query("select * from users;")
    res.status(200).json(response.rows)
}

const getUserByID = async (req,res) =>{
    const id = req.params.id
    const response = await pool.query('Select * from users where id = $1',[id])
    res.json(response.rows)
}

const createUsers = async (req,res) =>{
    const{nombre,email} = req.body
    const response = await pool.query("insert into users (nombre,email) values ($1,$2)",[nombre,email])
    console.log(response)

    res.json({
        message: "ostia, usuario añadido",
        body: {
            user:{
                nombre,email
            }
        }
    })
}

const deletetUserByID = async(req,res) => {
    const id = req.params.id
    const response = await pool.query('delete from users where id = $1',[id])
    res.json(`user ${id} deleted bien, ajua`)
}

const updateUserByID = async (req,res)=> {
    const id = req.params.id
    const{nombre,email} = req.body
    const response = await pool.query('update users set nombre = $1, email= $2  where id = $3',[nombre,email,id])
    res.json(`useractualizado bien, ajua`)
}

module.exports = {
    getUsers,
    getUserByID,
    createUsers,
    deletetUserByID,
    updateUserByID
}