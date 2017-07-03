const router = require('express').Router();

router.get('/ping', (req, res) => {
  res.status(200).json('PONG!');
});

module.exports = router;
