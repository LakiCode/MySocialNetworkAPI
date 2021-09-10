const router = require('express').Router();
const userRoutes = require('./users-routes');
const thoughtsRoutes = require('./thoughts-routes');

// add prefix of `/user' and '/Thoughts` to routes created in user-routes.js and Thoughts-routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
