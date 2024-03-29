import React, { useEffect, useState } from 'react'
import NewsItem  from './NewsItem'
import styled from 'styled-components'
import axios from 'axios';
import usePromise from '../lib/usePromise';

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
      
    const NewsList=({category})=>{
      const [loading, response, error] = usePromise(async ()=>{
        const query=category==='all'?'':`&category=${category}`;
        return await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c5edc801b19b4055a20e6d4b93dac840`,
      )},[category]);
      
  

      //대기중일때
      if(loading){
        return<NewsListBlock>대기 중...</NewsListBlock>
      }
      if(!response){
        return null
      }
      if(error){
        return <NewsListBlock>에러 발생</NewsListBlock>;
      }
      const {articles}=response.data;
      return (
        <NewsListBlock>
          {articles.map(article=>(
            <NewsItem key={article.url} article={article}/>
          ))}
        </NewsListBlock>
      )
    }
  


export default NewsList