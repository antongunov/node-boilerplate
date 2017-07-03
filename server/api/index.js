const router = require('express').Router();

router.get('/ping', (req, res) => {
  res.status(200).json('PONG!');
});

router.use((req, res) => {
  res.status(404).json({
    error: `Unknown API endpoint "${req.method} ${req.url}"`,
  });
});

router.use((err, req, res, next) => {
  /* eslint no-unused-vars: off */
  res.status(500).json({
    error: 'General API error',
  });
});

module.exports = router;
