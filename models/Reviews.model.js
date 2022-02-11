const { model, Schema } = require("mongoose");

const reviewSchema = new Schema({
  title: {
    type: String,
    // required: [true, "Title is required"],
  },
  rate: {
    type: Number,
    min: 1,
    max: 5,
    // required: [true, "Title is required"],
  },
  comment: {
    type: String,
    maxlength: 200,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = model("Review", reviewSchema);
