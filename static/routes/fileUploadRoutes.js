const express = require('Express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/upload_file', upload.single('fileUpload'), (req, res) => {
    if (req.file) {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Upload Success</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            </head>
            <body>
                <div class="container mt-5">
                    <div class="alert alert-success text-center">
                        <h1>File Uploaded Successfully</h1>
                        <p>File: <strong>${req.file.originalname}</strong></p>
                        <p>Location: <a href="/uploads/${req.file.filename}" target="_blank">View File</a></p>
                        <div class="mt-4">
                            <h3>Uploaded Image:</h3>
                            <img src="/uploads/${req.file.filename}" class="img-fluid w-25" alt="Uploaded Image">
                        </div>
                    </div>
                    <a href="/upload" class="btn btn-primary mt-4">Upload Another File</a>
                </div>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </body>
            </html>
        `);
    } else {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>No File Uploaded</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            </head>
            <body>
                <div class="container mt-5">
                    <div class="alert alert-danger text-center">
                        <h1>No File Uploaded</h1>
                        <p>Please try uploading a file again.</p>
                    </div>
                    <a href="/upload" class="btn btn-primary mt-4">Upload a File</a>
                </div>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </body>
            </html>
        `);
    }
});

module.exports = router;
