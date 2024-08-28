const express = require('Express');
const path = require('path');

const app = express();

const fileUploadRoutes = require('./routes/fileUploadRoutes');
const formSubmitRoutes = require('./routes/formSubmitRoutes');

app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use routes
app.use(fileUploadRoutes);
app.use(formSubmitRoutes);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/blog', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/blog.html'));
});

app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/upload.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/contact.html'));
});

app.get('/profile', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/profile.html'));
});

// Start server
const port = 4000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
