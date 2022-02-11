const { model, Schema } = require("mongoose");

const roomSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  beds: {
    type: Number,
  },
  guests: {
    type: Number,
  },
  price: {
    type: Number,
  },

  image: {
    type: String,
  },
  location: {
    type: String,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = model("Room", roomSchema);
