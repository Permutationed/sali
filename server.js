// Simple Express server for handling /{id} routing
// Run with: node server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Route for /{id} - redirect to goal.html with id parameter
app.get('/:id', (req, res) => {
  const id = req.params.id;
  
  // Skip if it's a file extension (like .html, .js, .css)
  if (path.extname(id)) {
    return res.status(404).send('Not found');
  }
  
  // Redirect to goal.html with the id
  res.redirect(`/goal.html?id=${id}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Goals accessible at http://localhost:${PORT}/goals.html`);
  console.log(`Individual goals at http://localhost:${PORT}/{id}`);
});
