import React from 'react'
import { useContext } from 'react'
import { myGlobalData } from './Context'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const{setIsLoggedIn,user}=useContext(myGlobalData)
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"100%",
        height:"50px",
        backgroundColor:"black"
    }}>
        <h1 style={{
              color:"white"
        }}>React Context</h1>
        <ul style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"25px",
            listStyleType:"none",
            fontSize:'1.3rem',
            color:"white"
        }}>
            <Link to='home'>
            <li>Home</li>
            </Link>
            <Link to='products'>
            <li>Products</li> 
            </Link>
        </ul>
        <button onClick={()=>{
            setIsLoggedIn(false)
        }}>Log Out</button>
        <h2 style={{
            color:"yellow"
        }}>{user.name}</h2>
    </div>
  )
}

export default Navbar