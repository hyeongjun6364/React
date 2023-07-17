import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState} from'react'
import NewsList from './components/NewsList';
import Categories from './components/Categories';
// news api key:c5edc801b19b4055a20e6d4b93dac840
const App=()=> {
  
  return(
    <>
    <Categories/>
    <NewsList/>
    </>
  )

}


export default App;
