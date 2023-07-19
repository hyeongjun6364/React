import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useCallback, useState} from'react'
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import {Route,Routes} from 'react-router-dom'
import NewsPage from './pages/NewsPage';
// news api key:c5edc801b19b4055a20e6d4b93dac840
const App=()=> {
  // const [category,setCategory]=useState('all');
  // const onSelect=useCallback(category => setCategory(category),[])

  return(
    <Routes>
      <Route path='/' element={<NewsPage/>}/>
      <Route path='/:category' element={<NewsPage/>}/>
    </Routes>
  )

}


export default App;
