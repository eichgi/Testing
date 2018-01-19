'use strict'
const Post = use('App/Models/Post')

class PostController {

    async allPosts({request, view}) {
        const posts = await Post.all()
        let response = {
            message: 'Posts',
            status: 200,
            posts: posts.toJSON(),
        }
        return view.render('post.index', response)
    }
}

module.exports = PostController
