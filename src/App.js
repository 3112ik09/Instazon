import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
// import './Header.css';
import {BrowserRouter , Router , Route , Routes}
from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import App2 from './App2';
import Jamy from './Jamy';
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
    //will oly use once 
    auth.onAuthStateChanged(authUser=>{
      // console.log('the user is'  ,authUser);
    if (authUser)
    {
      // the user just logged in 
      dispatch({
        type:"SET_USER" ,
        user: authUser,
      });
    }
    else
    {
      //user is logged out
      dispatch({
        type:"SET_USER" ,
        user:null,
      })

    }
    })
 },[])

  return (
    //BEM
   
    <BrowserRouter>
     
    <Routes>
        <Route path="/login" element={<><Login/></>} />
        <Route path="/" element={<><Header/><App2/><Home/></>} />
        <Route path="/c" element={<><Header/><Checkout/></>} />
        <Route path="/irene" element={<><h1>irene</h1></>} />
        <Route path="/jisoo" element={<><h1>jisoo</h1></>} />
        <Route path="/jamy" element={<><Jamy/></>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
