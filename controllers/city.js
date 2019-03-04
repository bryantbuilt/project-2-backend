const db = require('../models')

module.exports = {
    show: (req,res) => {
        db.Post.find({name: req.params.city},(err,res))
            .exec()
            .then(res => {
                console.log(res);
            })
            .catch(console.log(err))
    }
}