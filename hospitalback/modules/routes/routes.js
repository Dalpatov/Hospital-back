const express = require('express');
const router = express.Router()

const{
  allUsers,
  createUser,
  LogIn
} = require('../controllers/user.controller')

//User routs
router.get('/allUsers',allUsers);
router.post('/createUser',createUser);
router.post('/LogIn',LogIn);

module.exports = router;