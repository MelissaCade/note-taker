const router = require("express").Router();

//http://localhost:3001/api/notes
router.post("/", (req, res) => {
  console.log("Help, I'm trapped in a router factory!");
});

module.exports = router;
