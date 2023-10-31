module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/posts/example',
            handler: 'post.exampleAction',
            config: {
                auth: false,
            }
        }
    ]
}