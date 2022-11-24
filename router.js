const Router = require("koa-router");
const router = new Router();
const { getSongs, addSong } = require("./controllers/songs.controllers");

router.get("/songs", getSongs);
router.post("/songs", addSong);

module.exports = router;
