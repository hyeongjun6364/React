import React from 'react'
import styled from "styled-components";
import PostListItem from './PostListItem';
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
//return은 단일 요소만 반환할 수 있기에 return을 2번해야한다.
function PostList(props) {
    const {posts,onclickitem}=props;
  return (
    <Wrapper>
        {posts.map((post,index) => {
            return (
            <PostListItem 
                key={post.id} 
                post={post} 
                onclick={()=>{
                    onClickItem(post);
                }} />);
        })}
    </Wrapper>
    
  )
}

export default PostList