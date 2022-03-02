const userCtrl = {};
const User = require("./user");
userCtrl.createUser = async (req, res) => {
  try {
      const { dpi } = req.body;
      const userfind = await User.findOne({ dpi: dpi });
      if (userfind){
          return res.status(400).json({ description: "El DPI ya esta registrado con otra cuenta ", msg: "err" });
      }
      const date = new Date() ; 
    let accountNumber = "0" + Math.floor(Math.random() * 1000) + date.getDay() + date.getMonth() + date.getFullYear() + date.getSeconds() + date.getMinutes() + date.getHours()+ Math.floor(Math.random() * 1000);
    if (accountNumber.length > 16 ){
      accountNumber = accountNumber.substring(0,16);
    }
      req.body['accountNumber'] = (accountNumber);
      const newUser =  new User(req.body);
      await newUser.save();
      console.log("user created ", req.body)
    return res.status(200).json({ description: "user created", msg: "ok", user: newUser, NoAccount: accountNumber });
  } catch (err) {
    console.log(err);
    res.status(500).json({ description: "error creating a user", msg: "err" });
  }
};

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
};

userCtrl.getOneUser = async (req, res) => {
  
  const { userName } = req.body;
  const userFind = await User.findOne({ userName: userName });
  userFind
    ? res.status(200).json(userFind)
    : res.status(400).json({ description: "user not found", msg: "err" });
};



userCtrl.loginUser = async (req, res) => {
  try {
    const { accountNumber , password } = req.body;
    const userFind = await User.findOne({ accountNumber: accountNumber });

    if (!userFind) {
      return res
        .status(401)
        .json({ description: "user not found in the system", msg: "err" });
    }

    if (userFind.password != password) { // NO !== en dado caso un usuario ponga una contraseña solo con numeros asi no truena
      return res
        .status(401)
        .json({ description: "incorrect password", msg: "err" });
    }

    return res.status(200).json({ description: "successful login", msg: "ok", user: userFind});

  } catch (err) {
    console.log(err);
    res.status(500).json({ description: "login not processed", msg: "err" });
  }
};

userCtrl.QueryBalance = async ( req , res )=>{
  const { accountNumber } = req.params;
  const user = await User.findOne({ accountNumber: accountNumber });

  if (user == undefined) {
    return res
      .status(401)
      .json({ description: "account not found in the system", msg: "err" });
  }

  return res.status(200).json({ description: "account ok", msg: "ok", balance: user.balance});
}

userCtrl.testPath = (req, res) => {
  res.status(200).send("hi from node server");
};

module.exports = userCtrl;
