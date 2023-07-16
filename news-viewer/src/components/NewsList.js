import React from 'react'
import NewsItem  from './NewsItem'
import styled from 'styled-components'
function NewsList() {
    const NewsListBlock = styled.div`
        box-sizing:border-box;
        padding-bottom:3rem;
        width:768px;
        margin:0 auto;
        margin-top:2rem;
        @media screen and (max-width:768px){
            width:100%;
            padding-left: 1rem;
            paddint-right: 1rem;
        }
    `;
    const sampleArticle = {
        title:'제목',
        description:'내용',
        url:'https://google.com',
        urlToImage:"https://via.place.com/160"
    }
  return (
    <div>NewsList</div>
  )
}

export default NewsList