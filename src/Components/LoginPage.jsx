import React from 'react'

import { useContext } from 'react'
import { myGlobalData } from './Context'
// import { GlobalData } from '../../../todoapp/src/Components/Todo'
const LoginPage = () => {
    const{setIsLoggedIn,user,setUser}=useContext(myGlobalData)
 
  return (
    <div>
        <div className="Container" style={{
            width:"300px",
            height:"300px",
            // border:"2px solid black",
            margin: "25px auto",
            boxShadow:"0px 0px 3px black",
            textAlign:"center",
            padding:"20px",

        }}>
            <h2 style={{
                textAlign:"center",
                
            }}>Login Page</h2>
            <input type='text' placeholder='Enter UserName' style={{
                marginTop:"30px",
                width:"80%",
                height:"30px",
                border:"none",
                borderBottom:"2px solid red",
                fontSize:"1.2rem",
                outline:"none",
            }} onChange={(e)=>{
                setUser({
                    ...user,
                    name:e.target.value
                })
            }}/>
            <br/>
            <br/>
            <input type='password'  placeholder='Password' style={{
                marginTop:"30px",
                width:"80%",
                height:"30px",
                border:"none",
                borderBottom:"2px solid red",
                fontSize:"1.2rem",
                outline:"none",
            }} onChange={(e)=>{
                setUser({
                    ...user,
                    password:e.target.value
                })
            }}/>
            <br/>
            <br/>
            <button style={{
                width:"100px",
                height:"30px",
                cursor:'pointer'
            }} onClick={()=>{
                if((user.name==="venky" && user.password==="venky@123" )|| (user.name==="admin" && user.password==="admin@123")){
                        setIsLoggedIn(true)
                }
                else{
                    alert("Enter Proper Credintials")
                }
            }}>Submit</button>
        </div>
    </div>
  )
}

export default LoginPage