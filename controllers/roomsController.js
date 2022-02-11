const Room = require("../models/Room.model");

exports.getCreateRoom = (req, res) => {
  res.render("rooms/create-form");
};

exports.postCreateRoom = async (req, res) => {
  const { name, description, beds, guests, price, image, location } = req.body;
  try {
    const newRoom = await Room.create({
      name,
      description,
      beds,
      guests,
      price,
      image,
      location,
    });

    console.log(newRoom);

    return res.redirect("/rooms");
  } catch (error) {
    console.log(error);
  }
};
exports.getRooms = async (req, res) => {
  const allRooms = await Room.find({});
  console.log(allRooms);
  res.render("rooms/list-rooms", { allRooms });
};

exports.getRoom = async (req, res) => {
  const { id } = req.params;
  const currentRoom = await Room.findById(id);
  res.render("rooms/detail", { currentRoom });
};
