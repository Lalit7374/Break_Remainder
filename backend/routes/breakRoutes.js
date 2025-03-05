const express = require('express');
const router = express.Router();

// Sample data: Break suggestions
const breakSuggestions = [
    "Stretch for 5 minutes",
    "Drink some water",
    "Look away from the screen for 20 seconds",
    "Do some deep breathing",
    "Walk around for a few minutes"
];

// GET - Get a random break suggestion
router.get('/suggest', (req, res) => {
    const randomBreak = breakSuggestions[Math.floor(Math.random() * breakSuggestions.length)];
    res.json({ message: randomBreak });
});

module.exports = router;
