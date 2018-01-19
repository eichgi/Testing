'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const Database = use('Database')
const Post = use('App/Models/Post')
//import Post from 'App/Models/Post' <Esto esta mal>

Route.on('/').render('welcome')

Route.get('/game', 'GameController.render');

Route.get('/posts', 'PostController.allPosts')
Route.get('/posts/:id', async ({params}) => {
    const posts = Post.find(params.id)
    return posts
})

Route.get('/db', async () => {
    return await Database.table('users').select('*')
    //await Database.table('users').paginate()
})

Route.get('/user', 'ApiController.getUser');
