const Review = require('../models/Reviews.model');

const Room = require('../models/Room.model')

exports.getReview = (req, res) => {
    const { id } = req.params
    console.log(id);
    return res.render(`reviews/review-form`, {id})
}

exports.postReview = async (req, res) => {
    const { title, comment, rate } = req.body;
    const { _id } = req.session.user;
    const { id } = req.params;

    try {

        const newReview = await Review.create({
            title, comment, rate, user: _id
        });
        console.log(newReview);
        const foundRoom = await Room.findByIdAndUpdate(
            id,
            {$push: {reviews: newReview._id}}
        )
        return res.send('review creado!');

    } catch (error) {
        console.log(error);
    }
}


