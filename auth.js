const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Dummy login logic
  res.json({ token: 'dummy-token' });
});

module.exports = router;
