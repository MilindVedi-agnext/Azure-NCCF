const express = require('express');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Protected route using the middleware
app.get('/protected', authenticateToken, (req, res) => {
    res.send('Protected page - Authentication successful');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
