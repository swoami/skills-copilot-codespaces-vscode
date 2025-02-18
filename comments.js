var express = require('express');
var app = express();

app.post('/comments', function(req, res) {
    res.send('Create a new comment');
});

app.get('/comments', function(req, res) {
    res.send('Retrieve all comments');
});

app.get('/comments/:id', function(req, res) {
    res.send('Retrieve a single comment');
});

app.put('/comments/:id', function(req, res) {
    res.send('Update a comment');
});

app.delete('/comments/:id', function(req, res) {
    res.send('Delete a comment');
});

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});