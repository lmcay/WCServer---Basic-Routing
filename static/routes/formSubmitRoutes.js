const express = require('Express');
const router = express.Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/submit_form', urlencodedParser, (req, res) => {
    const { name, email, message, gender, services, newsletter } = req.body;

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Submission Response</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        </head>
        <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">My Website</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="./home.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./blog.html">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./upload.html">Upload</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./profile.html">Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container mt-5">
                <h1 class="text-center">Form Submission Successful</h1>
                <div class="row mt-4">
                    <div class="col-md-8 offset-md-2">
                        <div class="card">
                            <div class="card-header">
                                Submitted Information
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Your Details:</h5>
                                <p class="card-text"><strong>Name:</strong> ${name}</p>
                                <p class="card-text"><strong>Email:</strong> ${email}</p>
                                <p class="card-text"><strong>Message:</strong> ${message}</p>
                                <p class="card-text"><strong>Gender:</strong> ${gender}</p>
                                <p class="card-text"><strong>Services Interested In:</strong> ${services}</p>
                                <p class="card-text"><strong>Newsletter Subscription:</strong> ${newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
                            </div>
                            <div class="card-footer text-center">
                                <a href="/" class="btn btn-primary">Back to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </body>
        </html>
    `);
});

module.exports = router;
