const {
  addToLikedMovies,
  getLikekedMovies,
} = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikekedMovies);

module.exports = router;
