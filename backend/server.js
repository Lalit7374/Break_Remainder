require('dotenv').config();  // Load environment variables

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({ origin: 'http://localhost:4200' })); // Allow Angular frontend
app.use(bodyParser.json());
app.use(express.json()); // Ensure JSON request handling

// ✅ Log Incoming Requests (for debugging)
app.use((req, res, next) => {
    console.log(`➡️ ${req.method} ${req.url}`);
    next();
});

// ✅ Default Route
app.get('/', (req, res) => {
    res.send('Take a Break Reminder API is running...');
});

// ✅ Import Routes
const breakRoutes = require('./routes/breakRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/breaks', breakRoutes);
app.use('/api/users', userRoutes);

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
