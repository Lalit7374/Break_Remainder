const express = require('express');
const router = express.Router();

// Temporary in-memory user settings
let userPreferences = {
    breakInterval: 30,  // Default to 30 minutes
};

// GET - Retrieve user break interval
router.get('/settings', (req, res) => {
    res.json(userPreferences);
});

// POST - Update user break interval
router.post('/settings', (req, res) => {
    const { breakInterval } = req.body;
    if (breakInterval && typeof breakInterval === "number") {
        userPreferences.breakInterval = breakInterval;
        res.json({ message: "Break interval updated", userPreferences });
    } else {
        res.status(400).json({ error: "Invalid break interval" });
    }
});

module.exports = router;
