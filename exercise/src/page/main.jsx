import React from 'react'
import Button from '../ui/Button';
import PostList from '../../../exercise/src/component/list/PostList';
const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function main(props) {
    const navigate = useNavigate();
  return (
    <Wrapper>
        <Container>
            <Button title="글 작성하기"
            //클리과 같이 특정 이벤트가 발생할때만 하려면 익명함수를 써야하는데 이것은 최상위 컴포넌트에서 구현하면됨 
                    onClick={() => {
                        navigate("/post-write");
                    }}/>
                <PostList posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}/>
        </Container>
    </Wrapper>
  )
}

export default main