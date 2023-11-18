import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import{ BrowserRouter,Routes,Route } from 'react-router-dom';
import Details from './details/Details';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes> 
  </BrowserRouter>


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);



