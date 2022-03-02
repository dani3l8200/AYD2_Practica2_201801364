const reportsCtrl = {};
const Report = require("./report");
const User = require("../users/user");
reportsCtrl.testPath = async (req, res) => {
    return res.json({msg: 'reports listening'});
}

reportsCtrl.getReports = async (req,res)=>{
    try {
        const { NoAccount } = req.params;
        const reports1 = await Report.find({ accountNumber1: NoAccount});
        const reports2 = await Report.find({ accountNumber2: NoAccount });

        return res.status(200).json({
            transferi: reports1,
            meTransfirieron: reports2
        });
    } catch (error) {
        return res
            .status(401)
            .json({ description: "Pinche Juan >:v", msg: "err" });
    }
}

reportsCtrl.transfer = async (req, res) =>{
    const { AccountOrigin , AccountDestination , montoTransferir  } = req.body;
    
    const userFind1 = await User.findOne( { accountNumber: AccountOrigin } );

    const userFind2 = await User.findOne({ accountNumber: AccountDestination });

    if (userFind2 == undefined) {
        return res
            .status(401)
            .json({ description: "Account not found in the system", msg: "err" });
    }
    console.log(userFind1)
    if (userFind1.balance >= montoTransferir ){
        userFind1.balance = userFind1.balance - montoTransferir;
        userFind2.balance = userFind2.balance + montoTransferir;
        await userFind1.save();
        await userFind2.save();
        // registran el reporte
        let report = {
            name1: userFind1.firstnames + " " + userFind1.lastnames,
            name2: userFind2.firstnames + " " + userFind2.lastnames,
            accountNumber1: AccountOrigin, 
            accountNumber2: AccountDestination,
            balance1: userFind1.balance, 
            balance2: userFind2.balance,
            transferredAmount: montoTransferir
        }
        const newUser =  await new Report(report);
        await newUser.save();
        return res
            .status(200)
            .json({ description: "transfer ok", msg: "ok", balance: userFind1.balance });

    }else{
        return res
            .status(401)
            .json({ description: "insufficient funds", msg: "err" });
    }
}








module.exports = reportsCtrl;
