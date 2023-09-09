const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');
const posts = new Router();



posts.get('/',postsCtrl.list);
posts.post('/',postsCtrl.write);
posts.get('/:id',postsCtrl.read);
posts.delete('/:id',postsCtrl.remove);
//put은 기존의 있던내용은 다사라지고 새로운 내용만 남게됨
posts.put('/:id',postsCtrl.replace);
//patch는 put과달리 기존값은 유지하고 전달된 값만 바뀜
posts.patch('/:id',postsCtrl.update);

module.exports = posts;