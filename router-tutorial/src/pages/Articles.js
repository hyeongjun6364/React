import React from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'
function Articles() {
    const activeStyle = {
        color: 'green',
        fontSize: 21,

    };

  return (
    //Outlet을 통해 Article 컴포넌트가 보여지게 된다.
    //Navlink는 특정 경로와 일치하면 css 클래스를 적용하는 컴포넌트이다.
    <div>
        
        <Outlet/>
        <ul>
            <ArticleItem id={1}/>
            <ArticleItem id={2}/>
            <ArticleItem id={3}/>
        </ul>
    </div>
  )
}

function ArticleItem ({id}) {
    const activeStyle ={
        color:'green',
        fontSize:21,
    }
    return (
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({isActive}) => (isActive?activeStyle:undefined)}>
                    게시글 {id}
                </NavLink>
        </li>
    )
}
export default Articles