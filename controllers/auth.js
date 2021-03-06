const jwt = require('jsonwebtoken')
const models = require('../models')
const user = models.users

exports.login = (req, res) =>{
    const email = req.body.email
    const password = req.body.password


    user.findOne({where: {email, password}}).then(user=>{

        if(user){
            const token = "Bearer " + jwt.sign({ userId: user.id}, 'my-secret-key')
            res.send({
                id: user.id,
                email,
                token
            })
        }else{
            res.send({
                error:true,
                message: "Email yang anda masukkan salah!"
            })
        }
    })
}

exports.register = (req, res) =>{
    const email = req.body.email
    const password = req.body.password


    user.findOne({where: {email, password}}).then(user=>{

        if(user){
//             const {id} = user;

            const token = jwt.sign({ userId: user.id}, 'my-secret-key')
            res.send({
//                 id,
                email,
                token
            })
        }else{
            res.send({
                error:true,
                message: "Email yang anda masukkan salah!"
            })
        }
    })
}


//get semua user
exports.getUser = (req, res) => {
    user.findAll().then(item=>res.send(item));
}
