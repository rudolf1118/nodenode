const axios = require('axios');

exports.handler = async (event) => {
    try {
        const response = await axios.post('http://localhost:3000/api/posts', {
            title: 'New Post',
            content:"My awesome day!"
        });
        console.log('Response:', response.data);
        return {
            statusCode: 201,
            body: JSON.stringify('created successfully!'),
        };
    } catch (error) {
        console.error('Error creating post:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Failed to create post'),
        };
    }
};