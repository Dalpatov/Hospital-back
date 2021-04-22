const User = require('../../db/models/users/index')

module.exports.LogIn = async (req, res, next) => {
  const ligin= new User(req.body);
  const checkLogin = ligin.login;
  const checkPassword = ligin.password
  const checkingUser = await User.findOne({login: checkLogin, password: checkPassword});
    if(checkingUser){
      ligin.save().then(result => {
      res.send(result);
      });
    } else {
      return res.status(404).send({error:"Sorry but login or password is`not exist"})
    }
}
  
module.exports.createUser = async (req, res, next) => {
  const user = new User(req.body);
  const newlogin = user.login;
  const checkingUser = await User.findOne({login: newlogin});
    if(checkingUser){
     return res.status(400).send({error:"Sorry but user is exist, make another login"})
    } else {
      user.save().then(result => {
      res.send(result);
     } )
    }
  }
  
module.exports.allUsers = async (req, res, next) => {
  const user = new User(req.body);
    user.save().then(result => {
      User.find().then(result => {
        res.send({data:result});
      });
    });
 };