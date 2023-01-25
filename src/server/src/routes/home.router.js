const {Router} = require('express')
const router = Router()

const homeCtr = require('../controllers/home.controller')


router.get('/:id', homeCtr.getHome)
router.get('/', homeCtr.getHomes)

router.post('/', homeCtr.createHome)

router.put('/:id', homeCtr.editHome)

router.delete('/:id', homeCtr.deleteHome)

module.exports = router
