const {Router} = require('express')
const router = Router()

const taskCtr = require('../controllers/task.controller')


router.get('/:id', taskCtr.getTask)
router.get('/', taskCtr.getTasks)

router.post('/', taskCtr.createTask)

router.put('/:id', taskCtr.editTask)

router.delete('/:id', taskCtr.deleteTask)

module.exports = router