const
    db = require('../models');

module.exports = {
    create: (req,res) => {
        db.Post.create(req);
        console.log(res);
    },

    update: (req,res) => {
        db.Post.update(req);
        console.log(res);

    },

    delete: (req,res) => {
        db.Post.findByIdAndDelete(req);
        console.log(res);
    }
}