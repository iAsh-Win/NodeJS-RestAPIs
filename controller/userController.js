const User = require('../models/user');

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => next(err));
};

exports.getUserById = (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        })
        .catch(err => next(err));
};

exports.createUser = (req, res, next) => {
    const { name, email, password } = req.body;
    const newUser = new User(req.body);

    newUser.save()
        .then(savedUser => {
            res.status(201).json(savedUser);
        })
        .catch(err => next(err));
};

exports.updateUser = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        })
        .catch(err => next(err));
};

exports.deleteUser = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted' });
        })
        .catch(err => next(err));
};
