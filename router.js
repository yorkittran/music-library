const Router = require("koa-router");
const router = new Router();
const { getSongs, addSong } = require("./controllers/songs.controllers");

router.get("/songs_list", getSongs);
router.post("/add_song", addSong);

module.exports = router;
