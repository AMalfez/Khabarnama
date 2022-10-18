import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <NavLink  style={({isActive})=>({
                    color: isActive && 'grey'
                  })} className="navbar-brand" to="/name">Khabarnama</NavLink  >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink  style={({isActive})=>({
                    color: isActive && 'grey'
                  })} className="nav-link active" aria-current="page" to="/">Home</NavLink >
                </li>
                <li className="nav-item">
                  <NavLink  style={({isActive})=>({
                    color: isActive && 'grey'
                  })} className="nav-link active" aria-current="page" to="/about">About</NavLink  >
                </li>
                <li className="nav-item">
                  <NavLink  style={({isActive})=>({
                    color: isActive && 'grey'
                  })} className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink  >
                </li>

                <li className="nav-item dropdown">
                  <NavLink  style={({isActive})=>({
                    color: isActive && 'grey'
                  })} className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </NavLink  >
                  <ul className="dropdown-menu">
                    <li><NavLink  style={({isActive})=>({
                    color: isActive && 'white'
                  })} className="dropdown-item" to="/business">Business</NavLink  ></li>
                    <li><NavLink  style={({isActive})=>({
                    color: isActive && 'white'
                  })} className="dropdown-item" to="/entertainment">Entertainment</NavLink  ></li>
                    <li><NavLink  style={({isActive})=>({
                    color: isActive && 'white'
                  })} className="dropdown-item" to="/general">General</NavLink  ></li>
                    <li><NavLink  style={({isActive})=>({
                    color: isActive && 'white'
                  })} className="dropdown-item" to="/health">Health</NavLink  ></li>
                    <li><NavLink  style={({isActive})=>({
                    color: isActive && 'white'
                  })} className="dropdown-item" to="/sceince">Science</NavLink  ></li>
                    <li><NavLink  style={({isActive})=>({
                    color: isActive && 'white'
                  })} className="dropdown-item" to="/sports">Sports</NavLink  ></li>
                    <li><NavLink  style={({isActive})=>({
                    color: isActive && 'white'
                  })} className="dropdown-item" to="/technology">Technology</NavLink  ></li>
                  </ul>
                </li>

              </ul>
              <form className="d-flex" role="search" action='/'>
                <button className="btn btn-outline-success" type="submit">Login</button>
              </form>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    )
  }
}
export default Navbar
