import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import Nothing from './components/Nothing'
import Contact from './components/Contact'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element ={<Navbar />}>
            <Route exact index element={<News key='general' Country= 'us' Category = 'general' />}/>
            <Route exact path='sports' element={<News key='sports' Country= 'us' Category = 'sports' />}/>
            <Route exact path='entertainment' element={<News key='entertainment' Country= 'us' Category = 'entertainment' />}/>
            <Route exact path='general' element={<News key='general' Country= 'us' Category = 'general' />}/>
            <Route exact path='business' element={<News key='business' Country= 'us' Category = 'business' />}/>
            <Route exact path='technology' element={<News key="technology" Country= 'us' Category = 'technology' />}/>
            <Route exact path='sceince' element={<News key='science' Country= 'us' Category = 'science' />}/>
            <Route exact path='health' element={<News key='health' Country= 'us' Category = 'health' />}/>
            <Route exact path='about' element={<About />}/>
            <Route exact path='contact' element={<Contact />}/>
            <Route exact path='*' element={<Nothing />}/>
          </Route>
        </Routes>
        </BrowserRouter>
        
        <Footer />
      </div>
    )
  }
}

