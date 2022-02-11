const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Use a valid email"],
    },
    username: {
      type: String,
      required: [true, "username is required"],
      trim: [true, "username should not have spaces"],
      unique: true, // unique: true -> Ideally, should be unique, but its up to you
    },
    password: { type: String, required: [true, "password is required"] },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
