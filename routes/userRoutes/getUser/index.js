const express = require('express');
const User = require('../../../models/User');
const authMiddleware = require('../../../middleware/authMiddleware');
const router = express.Router();

module.exports = router.get('/api/get-user', authMiddleware, async (req, res) => {
    const user = req.user;

        // check user 
        const { email, _id } = await User.findById(user._id);

        // get user
        if(_id){
            res.status(200).json({ 
                data: {
                    id: _id,
                    email: email,
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
});