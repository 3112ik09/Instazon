import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter , Router , Route , Routes}
from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import App2 from './App2';
import Jamy from './Jamy';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51L2yA3SGCfvNjyemswfuUpnSHgSlWEOW1iR3N9PD069j8SQMGZmlxYiIjy3C6EfAGoEfz9bu4YjeInaBYZRhUiHb00KQrOw8DZ");
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
        <Route path="/payment" element={<><Header/><Elements stripe={promise}> <Payment/> </Elements></>}/>
        <Route path="/c" element={<><Header/><Checkout/></>} />
        <Route path="/irene" element={<><h1>irene</h1></>} />
        <Route path="/jisoo" element={<><h1>jisoo</h1></>} />
        <Route path="/jamy" element={<><Jamy/></>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
