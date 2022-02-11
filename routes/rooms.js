const router = require("express").Router();
const roomsController = require("./../controllers/roomsController");
const reviewsController = require("../controllers/reviewsController");

//CRUD
//GET - READ
router.get("/", roomsController.getRooms);

//POST - CREATE
//mostrar el formulario de crear
router.get("/create", roomsController.getCreateRoom);

//recibir info del formulario
router.post("/create", roomsController.postCreateRoom);

router.get("/:id", roomsController.getRoom);

// //PUT - UPDATE
router.get("/edit/:id", roomsController.getEditRoom);

router.post("/edit/:id", roomsController.postEditRoom);

// //DELETE - DELETE
router.post("/delete/:id", roomsController.postDeleteRoom);






router.get("/create-review/:id", reviewsController.getReview);

router.post('/create-review/:id', reviewsController.postReview)

module.exports = router;
