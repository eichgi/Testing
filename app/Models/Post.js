'use strict'

const Model = use('Model')

class Post extends Model {
    static get table() {
        return 'blog_posts'
    }
}

module.exports = Post
