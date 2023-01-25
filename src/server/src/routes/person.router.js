const {Router} = require('express')
const router = Router()

const personCtr = require('../controllers/person.controller')


router.get('/:id', personCtr.getPerson)
router.get('/', personCtr.getPersons)

router.post('/', personCtr.createPerson)

router.put('/:id', personCtr.editPerson)

router.delete('/:id', personCtr.deletePerson)

module.exports = router
