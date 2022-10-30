import React from 'react'

import logo from '../img/animals.jpg'
export const Navbar  = () => {
  return (
    <>

<div>
        <div className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src={logo} alt="logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/create">Create</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">List of animals</a>
          </li>
          
        </ul>
      </div>
    </div>
  </div></div>
  </>

  )
}
