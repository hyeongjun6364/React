import React from 'react'
import{useParams} from 'react-router-dom'
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
function NewsPage() {
    const params = useParams();
    //category값이 존재하면 값 할당 없으면 all반환
    const category=params.category || 'all';
  return (
    <div>
        <Categories/>
        <NewsList category={category}/>
    </div>
  )
}

export default NewsPage