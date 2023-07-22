import React from 'react';
import './App.css';
import CategoryList from './category/CategoryList';
import LoginForm from './Loginpage/LoginForm';
import SignupForm from './Loginpage/SignupForm';
import './App.scss'
import {Route,Routes} from 'react-router-dom'
import Question from './QuestionPage/Question';
import QnA from './QuestionPage/QnA'

function App() {
  return (
    <Routes>
      <Route path='/' element={<CategoryList/>}/>
      <Route path='/Login' element={<LoginForm/>}/>
      <Route path='/SignUp' element={<SignupForm/>}/>
      <Route path='/1' element={<Question/>}/>
      <Route path='/question/1' element={<QnA/>}/>
    </Routes>
  );
}

export default App;
