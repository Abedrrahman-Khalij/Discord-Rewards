const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configuration
const SECRET_KEY = 'your-secret-key-here'; // Replace with your actual secret key
const COMPLETED_USERS_FILE = 'completed_users.txt';

// Ensure the file exists
if (!fs.existsSync(COMPLETED_USERS_FILE)) {
    fs.writeFileSync(COMPLETED_USERS_FILE, '');
}

// Postback endpoint
app.get('/postback', (req, res) => {
    // Validate secret key
    if (req.query.key !== SECRET_KEY) {
        return res.status(403).json({ error: 'Invalid key' });
    }

    // Get Discord ID from track parameter
    const discordId = req.query.track;
    if (!discordId) {
        return res.status(400).json({ error: 'Missing track parameter' });
    }

    // Validate Discord ID format (17-19 digits)
    if (!/^\d{17,19}$/.test(discordId)) {
        return res.status(400).json({ error: 'Invalid Discord ID format' });
    }

    try {
        // Append the Discord ID to the file
        fs.appendFileSync(COMPLETED_USERS_FILE, `${discordId}\n`);
        console.log(`Recorded completed offer for Discord ID: ${discordId}`);
        
        // Return success response
        res.status(200).json({ message: 'Recorded' });
    } catch (error) {
        console.error('Error saving Discord ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Postback server running on port ${port}`);
}); 