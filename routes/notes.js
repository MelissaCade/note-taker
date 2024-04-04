const router = require("express").Router();
const path = require("path");
// TODO: insert routes to deal with http://localhost:3001/notes
// We will want to deliver the notes.html page to the user
//
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

module.exports = router;
