import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library  from './chapter_03/Library';
import Clock  from './chapter_04/Clock';
import CommentList from './chapter_05/commentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

//index.js 파일은 실제 화면에 rendering 하기위함.
//react component가 매초 생성됨.
//웹페이지의 특정 부분을 주기적으로 업데이트해줘야 하거나, 어떤 API로 부터 변경된 데이터를 주기적으로 받아와야 하는 경우
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// },1000);
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// root.render(
//   <React.StrictMode>
//     <Accommodate />  
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// root.render(
//   <React.StrictMode>
//     <ConfirmButton/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// root.render(
//   <React.StrictMode>
//     <LandingPage/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// root.render(
//   <React.StrictMode>
//     <AttendanceBook/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// root.render(
//   <React.StrictMode>
//     <SignUp/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// root.render(
//   <React.StrictMode>
//     <Calculator/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
/*
root.render(
  <React.StrictMode>
    <ProfileCard/>
  </React.StrictMode>,
  document.getElementById('root')
)*/
/*
root.render(
  <React.StrictMode>
    <DarkOrLight/>
  </React.StrictMode>,
  document.getElementById('root')
)*/
root.render(
  <React.StrictMode>
    <Blocks/>
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
