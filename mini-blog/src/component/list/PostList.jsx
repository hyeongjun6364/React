import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

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

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        //익명함수로 감싸면 클릭이벤트가 발생할때마다 실행된다.
                        //onClick={onClickItem(post)} 에서 postlistItem을 각각 눌렀을 때 가 정보를 post를 통해 상태를 없데이트한다. 그렇기에 post라는 인자가 필요하다
                        //위 코드처럼 짜면 이벤트 핸들러 발생되지않음 눌렀을 때 변화 x
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;