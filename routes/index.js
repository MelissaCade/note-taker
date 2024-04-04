const router = require("express").Router();
// Node will look for an index.js file in the api directory
const apiRoutes = require("./api");
const notesRouter = require("./notes");

//Prefix all routes defined in the api directory with "/api"
router.use("/api", apiRoutes);
//Assign the http://localhost:3001/notes route to the notes.js file in the routes folder (NOT THE NOTES.JS FILE IN THE API FOLDER)
router.use("/notes", notesRouter);

module.exports = router;
