import React, {useState} from 'react';
import './App.css';
import './New.css';
import './media.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from './layouts/Headers';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Hero from './pages/Hero';
import Footer from './component/Footer';
import Details from './pages/Details';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  const [search,setSearch]=useState('')
  const[getId,setGetId]=useState(0)
  const[details,setDetails]=useState('')
 


  return (
    <div className='bg'>
      <div className='header__ad'>
        <a href='https://beeline.kg/kg' target='blank'>
        <img src='https://unlim-500.beeline.kg/_next/static/media/big-background-ru.83bf5985.webp' alt='beeline' />
        </a>
      </div>
      <BrowserRouter>
      <Headers setSearch={setSearch}/>
      <Routes>
      <Route elemet={<SignIn/>} path='/signin'/>
      <Route element={<SignUp/>} path='/signup'/>
      <Route element={<Hero setGetId={setGetId} search={search} setDetails={setDetails} />} path='/'/>
      <Route element={<Details detId={getId} details={details}/>} path={`/details/:id`}/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Services/>} path='/services'/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
