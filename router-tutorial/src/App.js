import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import{Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/profiles/:username' element={<Profile/>} />
    <Route path='/articles' element={<Articles/>}/>
    <Route path='/articles/:id' element={<Article/>}/>


   </Routes>
  );
}

export default App;
