const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const router = require('koa-router')();

const app = new Koa();

const posts = [];

app.use(views(path.join(__dirname, '/../blog/views'), {
    map: {html:'swig'}
}));

router.get('/', async function (ctx){
    await ctx.render('index', {posts:posts});
}).get('/post/new', async function (ctx){
    await ctx.render('new');
}).get('/post/:id', async function (ctx){
    await ctx.render('show');
}).post('/post', async function (ctx){
    await ctx.render('create');
});

app.use(router.routes());

app.listen(3000);






