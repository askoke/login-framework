const bcrypt = require('bcrypt')
const UserModel = require('../models/user')

const register = async (req, res) => {
    console.log(req.body)
    try{
        const usernames = await UserModel.find({username: req.body.username})
        if (usernames.length > 0) {
            return res.status(500).json({ message: 'Username already exists!' })
        }

        const emails = await UserModel.findAll({ where: { email: req.body.email } })
        if (emails.length > 0) {
            return res.status(500).json({ message: 'Email already registered!' })
        }

        if (req.body.password.length < 8) {
            return res.status(500).json({ message: 'Password must be 8 characters or longer!'})
        }

        bcrypt.hash(req.body.password, 10, (error, cryptPassword) => {
            const user = new UserModel({
                username: req.body.username,
                email: req.body.email,
                password: cryptPassword
            })
            user.save()
            .then((user) => {
                res.json({
                    message: 'New user is registered',
                    user: user
                })
            })

            .catch((error) => {
                res.json({
                    message: 'Error occured while registering new user',
                    error: error
                })
            })
        })
    } catch(err){
        res.status(500).send(err)
    }
}

const login = async (req, res) => {
    const password = req.body.password
    const emails = await UserModel.findAll({ where: { email: req.body.email }})
    if (emails.length > 0) {
        bcrypt.compare(password, emails[0].password, (err, result) => {
            if(result){
                res.send('Logged in')
            } else {
                res.json({message: 'Password is incorrect'})
            }
        })
    } else {
        res.json({message: 'Email does not exsist!'})
    }
}

module.exports = {register, login}