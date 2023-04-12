import React from 'react'
import './products.css'
import { Link, Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <div className='mainContainer'>
        <div className="container">
            <div className="leftContainer">
                <div className='list'>
                    <Link to='html'>
                    <p>HTML</p>
                    </Link>
                    <Link to='css'>
                    <p>CSS</p>
                    </Link>
                    <Link to='js'>
                    <p>JavaScript</p>
                    </Link>
                    <Link to='react'>
                    <p>React Js</p>
                    </Link>
                </div>
            </div>
            <div className="rightCotainer">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Products