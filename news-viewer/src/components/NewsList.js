import React, { useEffect, useState } from 'react'
import NewsItem  from './NewsItem'
import styled from 'styled-components'
import axios from 'axios';

const NewsListBlock = styled.div`
        box-sizing:border-box;
        padding-bottom:3rem;
        width:768px;
        margin:0 auto;
        margin-top:2rem;
        @media screen and (max-width:768px){
            width:100%;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    `;

    const sampleArticle = {
        title:'제목',
        description:'내용',
        url:'https://google.com',
        urlToImage:"https://via.placeholder.com/160"
    }
    const NewsList=()=>{

      const[articles,setArticles]=useState(null);
      const[loading,setLoading]=useState(false);
// 컴포넌트가 렌더링 될 때 한번만 API를 호출하여 뉴스 아이템을 가져온다.
      useEffect(()=>{
        const fetchData=async()=>{
          setLoading(true);
          try{
            const response=await axios.get(
              'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c5edc801b19b4055a20e6d4b93dac840',
            )
            setArticles(response.data.articles)
          }
          catch(e){
            console.log(e);
          }
          setLoading(false);
        };
        fetchData();
      },[]);

      //대기중일때
      if(loading){
        return<NewsListBlock>대기 중...</NewsListBlock>
      }
      if(!articles){
        return null;
      }
      return (
        <NewsListBlock>
          {articles.map(article=>(
            <NewsItem key={article.url} article={article}/>
          ))}
        </NewsListBlock>
      )
    }
  


export default NewsList