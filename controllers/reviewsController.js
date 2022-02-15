const Review = require("../models/Reviews.model");

const Room = require("../models/Room.model");

//form to create a review
exports.getReview = (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.render(`reviews/review-form`, { id });
};

//route to catch the info
exports.postReview = async (req, res) => {
  const { title, comment, rate } = req.body;
  const { _id } = req.session.user;
  const { id } = req.params;

  try {
    const newReview = await Review.create({
      title,
      comment,
      rate,
      user: _id,
    });

    const foundRoom = await Room.findByIdAndUpdate(id, {
      $push: { reviews: newReview._id },
    });
    return res.redirect(`/rooms/${id}`);
  } catch (error) {
    console.log(error);
  }
};
