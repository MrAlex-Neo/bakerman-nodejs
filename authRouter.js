const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/registration',[
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль не должен быть больше 10 и меньше 1 символа').isLength({min:1, max: 10}),
    check('email', 'Некорректный email').isEmail()
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['UNBLOCK']), controller.getUsers)
router.get('/getUserIdByToken', roleMiddleware(['UNBLOCK', 'BLOCK']), controller.getUserIdByToken)
router.get('/changeState/:userId', roleMiddleware(['UNBLOCK']), controller.changeState)
router.delete('/users/:userId', roleMiddleware(['UNBLOCK']), controller.deleteUser);


module.exports = router