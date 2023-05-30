import React from 'react'
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
function postList(props) {
    const {posts, onClickItem}=props
  return (
    <Wrapper>
        {posts.map((post,index)=>{
            return(
                <PostListItem 
                key={post.id}
                post={post}
                onClick={() => {
                    onClickItem(post);}}
                />
            )

        })}
    </Wrapper>
  )
}

export default postList