// import React from 'react'
// //import { useState } from 'react'
// //import reactLogo from './assets/react.svg'
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

// //import viteLogo from '/vite.svg'
// import './App.css'
// import Login from './components/Login'
// import Signup from './components/Signup'
// import Header from './components/Header'

// function App() {


//   return (
//     <div className='App'>
//       <Router>
//         <Header/>
//         <Routes>
//           <Route path="/login" Component={Login} />
//           <Route path="/signup" Component={Signup} />
//           <Route path="/" Component={Login} />
//         </Routes></Router>


//     </div>
//   )
// }

// export default App



import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
