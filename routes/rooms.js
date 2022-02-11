const router = require("express").Router();
const roomsController = require("./../controllers/roomsController");

//CRUD
//GET - READ
router.get("/", roomsController.getRooms);
router.get("/:id", roomsController.getRoom);

//POST - CREATE
//mostrar el formulario de crear
router.get("/create", roomsController.getCreateRoom);
//recibir info del formulario
router.post("/create", roomsController.postCreateRoom);

// //PUT - UPDATE
// router.get("/edit/:id", roomsController.getEditRoom);
// router.post("/edit/:id", roomsController.postEditRoom);

// //DELETE - DELETE
// router.post("/delete/:id", roomsController.postDeleteRoom);

module.exports = router;
