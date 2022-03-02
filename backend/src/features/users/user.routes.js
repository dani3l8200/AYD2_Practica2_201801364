const {Router} = require('express');
const router = Router();
const userCtrl = require('./user.controller');


// GET
router.get('/getUsers' ,userCtrl.getUsers);
router.get('/test', userCtrl.testPath);
router.get('/balance/:accountNumber', userCtrl.QueryBalance);

// POST
router.post('/getOneUser',userCtrl.getOneUser);
router.post('/signin',userCtrl.loginUser);
router.post('/signup',userCtrl.createUser);  // 8 pruebas

// PUT


// DELETE



module.exports = router;