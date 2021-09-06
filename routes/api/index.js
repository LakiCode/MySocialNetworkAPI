const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of `/user' and '/thought` to routes created in user-routes.js and thought-routes
router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;
