const router = require("express").Router();
const { readFile, writeFile } = require("fs").promises;

//http://localhost:3001/api/notes
router.post("/", async (req, res) => {
  const newPost = {
    id: crypto.randomUUID(),
    title: req.body.title,
    text: req.body.text,
  };
  try {
    const existingDB = await readFile("db/db.json");
    const parsedDB = JSON.parse(existingDB);
    parsedDB.push(newPost);
    await writeFile("db/db.json", JSON.stringify(parsedDB));
    res.json("New note succesfully saved to database.");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const existingDB = await readFile("db/db.json");
    res.send(existingDB);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
