import { useParams } from "react-router-dom";

import React from 'react'

const data= {
  velopert:{
    name:'임형준',
    description:'리액트를 좋아하는 개발자',

  },
  gildong:{
    name:'홍길동',
    description:'고전 소설 홍길동전의 주인공',
  },
}


const Profile = () =>{
    //useParam => url을 객체 형태로 조회 가능 
    const Params=useParams();
    const profile = data[Params.username];
    return(
        <div>
            <h1>사용자 프로필</h1>
            {profile ?(
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (<p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    )  
}
export default Profile