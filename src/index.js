import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import {SearchUserPage , UserPage , MainPage , NotFoundPage} from './components/Pages';
import './index.css';
import { Test, TestToggler } from './playground/hooks/useEffect';




ReactDOM.render(
  <TestToggler/>,
  document.getElementById('root')
);





// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path = '/' element = {<MainPage/>}/>
//       <Route path = '/search' element = {<SearchUserPage/>}/>
//       <Route path = '/user/:userId' element = {<UserPage/>}/>
//       <Route path = '*' element = {<NotFoundPage/>}/>
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );


