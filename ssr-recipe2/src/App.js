import './App.css';
import Menu from './components/Menu';
import RedPage from './pages/RedPages';
import BluePage from './pages/BluePages';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Menu/>
      <hr/>
      <Routes>
        <Route path="/red" element={<RedPage/>}/>
        <Route path="/blue" element={<BluePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
