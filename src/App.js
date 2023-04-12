import './App.css';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import { useContext } from 'react';
import { myGlobalData } from './Components/Context';
import {Routes,Route} from 'react-router-dom'
import Products from './Components/Products';
import Html from './Components/Html';
import Css from './Components/Css';
import Javascript from './Components/Javascript';
import Reactjs from './Components/Reactjs';
function App() {
  const{isLoggedint}=useContext(myGlobalData)
  return (
    <div className="App">
      {
        isLoggedint ? (<> <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/products' element={<Products/>}>
          <Route path='' element={<Html/>}/>
            <Route path='html' element={<Html/>}/>
            <Route path='css' element={<Css/>}/>
            <Route path='js' element={<Javascript/>}/>
            <Route path='react' element={<Reactjs/>}/>
    
          </Route>
        </Routes></>) : <LoginPage/>
      }
   
      
    </div>
  );
}

export default App;
