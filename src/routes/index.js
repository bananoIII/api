const { Router } = require("express")
const router = Router()

const { getUsers,getUserByID,createUsers,deletetUserByID,updateUserByID} = require('../controllers/index.controller')

router.get('/users', getUsers)
router.get('/users/:id',getUserByID)
router.post('/users', createUsers)
router.delete('/users/:id',deletetUserByID)
router.put('/users/:id',updateUserByID)
module.exports = router
