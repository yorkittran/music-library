const Router = require("koa-router");
const router = new Router();
const {
  getSongs,
  findByIdSongs,
  addSong,
} = require("./controllers/songs.controllers");

router.get("/songs", getSongs);
router.get("/songs/:id", findByIdSongs);
router.post("/songs", addSong);

module.exports = router;
