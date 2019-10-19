const jwt = require('jsonwebtoken')
const models = require('../models')
const user = models.users

exports.register = ( req, res ) => {
    const token = jwt.sign({ email: req.body.email}, 'my-secret-key')
    const email = req.body.email

    user.findOrCreate({
        where: {email: req.body.email},
        defaults:{
            password: req.body.password,
            name: req.body.name
        }
    }).then( ([user, created]) => {
        console.log(user.get
            ({ plain: true})
        )
        if(created) {
            res.send({
                message: 'success',
                email,
                token
            })
        }else{
            res.send({
                message: "Email yang anda masukkan sudah digunakan"
            })
        }
    })

}