let postId = 1;

const posts = [{
    id: 1,
    title: '제목',
    body: '내용',
},
];


//post작성

exports.write = ctx => {
    //rest api의 request body는 ctx.request.body에서조회 가능
    const {title,body} = ctx.request.body;
    postId+=1;
    const post = {id:postId, title, body};
    posts.push(post);
    ctx.body = post;
}

//post 목록 조희

exports.list = ctx => {
    ctx.body = posts;
}


//specific post 조희

exports.read = ctx => {
    const {id} = ctx.params;
    const post =posts.find(p => p.id.toString()===id);

    if(!post){
        ctx.status = 404;
        ctx.body = {
            message:'포스트가 존재하지 않습니다',
        };
        return;
    }
    ctx.body = post;
}

//specific post 삭제

exports.remove = ctx => {
    const {id} = ctx.params;
    const index =posts.findIndex(p => p.id.toString()===id);

    if(index===-1){
        ctx.status = 404;
        ctx.body = {
            message:'포스트가 존재하지 않습니다',
        };
        return;
    }
    posts.splice(index,1);
    ctx.status = 204;
}

//post 수정

exports.replace = ctx => {
    const {id} = ctx.params;
    //post가 몇번째 index인지 확인
    const index =posts.findIndex(p => p.id.toString()===id);

    if(index===-1){
        ctx.status = 404;
        ctx.body = {
            message:'포스트가 존재하지 않습니다',
        };
        return;
    }
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};


//specific post 수정 

exports.update = ctx => {
    const {id} = ctx.params;
    const index =posts.findIndex(p => p.id.toString()===id);

    if(index===-1){
        ctx.status = 404;
        ctx.body = {
            message:'포스트가 존재하지 않습니다',
        };
        return;
    }
    posts[index]= {
        ...posts[index],
        ...ctx.request.body,

    };
    ctx.body = posts[index];
}