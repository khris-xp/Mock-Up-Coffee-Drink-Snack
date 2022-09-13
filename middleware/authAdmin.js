const Users = require('../models/userModel');

const authAdmind = async (req, res) => {
    try {

        const user = await Users.findOne({
            _id: req.user.id
        })
        if (user.role === 0)
            return res.status(400).json({ msg: "Admin Resources access denied" });

        next()

    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}