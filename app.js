const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const schoolRoutes = require('./routes/schoolRoutes');
const app = express();

app.use(express.json());

// Serve frontend static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', schoolRoutes);

// Serve frontend index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});