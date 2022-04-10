const express = require('express');
const bcrypt = require('bcryptjs');
const jsonwebToken = require('jsonwebtoken');
const User = require('../../../models/User');
const router = express.Router();

module.exports = router.post('/api/login', async (req, res) => {
    const { email, password, userPassword }= req.body;

    if(!email || !password){
        res.status(400).json({
            message: 'Please add all the fields!'
        });
        // throw new Error('Please add fields');
    }else{

        
        // check user 
        const user = await User.findOne({email: email.replaceAll(' ', '')});
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const decodedPassword = await bcrypt.compareSync(password, user.password, salt);

        // get user
        if(user && decodedPassword){
            res.status(200).json({ 
                data: {
                    id: user._id,
                    email: user.email,
                    status:true,
                    message: 'successful'
                }
            });            
        }else{
            res.status(400).json({ 
                data: {
                    status:false,
                    message: 'Invalid credentials!'
                }
            }); 
        }
    };
});