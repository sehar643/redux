import React from 'react'
import { Link } from 'react-router-dom'
import Slidebar from './Slidebar'
import { useSelector } from 'react-redux'


const Navbar = () => {

  let result = useSelector(state=>state.cartReducer.carts)
  console.log("result => ", result)


  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pro">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/women">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/men">Men</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/fragrance">Fragrances</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Promotion</a>
        </li>
       
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <button className="btn btn-success me-2" type="submit">Login</button>
        <button className="btn btn-warning" type="submit">Search</button>
        <Link to="/btn"><button className=''>({result.length})</button></Link>
      </form>
    </div>
  </div>
</nav>
<Slidebar/>




        
       
    


    </div>
  )
}

export default Navbar
