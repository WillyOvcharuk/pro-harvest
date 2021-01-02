const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const router = Router()

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        const candidate = await User.findOne({ email });

        if (candidate) {
            return res.status(500).json({ message: 'User with this email is already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword});
        user.save();

        res.status(201).json({ message: 'User has been created' })

    } catch (err) {
        console.error({ message: 'Problem with registration '. err.message })
    }
})


router.post('/login', (req, res) => {

})

module.exports = router