const express = require('express');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/posts', (req, res) => {
    const post = req.body;
    console.log('Received post:', post);
    res.status(201).json(post);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});