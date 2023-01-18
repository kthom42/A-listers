const router = require('express').Router();
<<<<<<< HEAD
const project = require("./projectRoutes");

router.use("./project", project);
=======
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
>>>>>>> 513d7ae96357310fdc5756a928618ebcfab8a5e9

module.exports = router;
