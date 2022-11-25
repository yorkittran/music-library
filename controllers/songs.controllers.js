const Songs = require("../models/songs.models");

const getSongs = async (ctx) => {
  try {
    const results = await Songs.find();
    ctx.body = results;
    ctx.status = 200;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    throw err;
  }
};

const findByIdSongs = async (ctx) => {
  try {
    const results = await Songs.findById(ctx.params.id).exec();
    ctx.body = results;
    ctx.status = 200;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    throw err;
  }
};

const addSong = async (ctx) => {
  try {
    await Songs.create(ctx.request.body);
    ctx.body = "Song Created!";
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    throw err;
  }
};

module.exports = {
  getSongs,
  findByIdSongs,
  addSong,
};
