import React from 'react'
const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;
function PostListItem(props) {
    const {post, onChange}=props;
  return (
    <Wrapper onChange={onchange}>
        <TitleText>{post.comment}</TitleText>
    </Wrapper>
  )
}

export default PostListItem