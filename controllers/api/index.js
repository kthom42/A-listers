const router = require('express').Router();
const project = require("./projectRoutes");

router.use("./project", project);

module.exports = router;
