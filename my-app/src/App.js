import logo from './logo.svg';
import './App.css';
import myComponent from './myComponent';
// function App(){
//   const name ="ffesf";
//   return(
//     <div>
//       {name==='react'?
//       (<h1>react</h1>):(<h2>fefsfe</h2>)}
//     </div>
//   );
// }
const App= () => {
  //return<myComponent />
  return <myComponent name="React"/>
};




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
