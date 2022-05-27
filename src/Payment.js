import React ,{useState} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import StripeCheckout from "react-stripe-checkout";
import { getBasketTotal } from './reducer';
import axios from 'axios';
import { toast } from "react-toastify";


function Payment() {
    const [{basket , user} , dispatch] = useStateValue();
    async function handleToken(token )
    {
        // console.log({token , addresses})
        const responce = await axios.post('https://ry7v05l6on.sse.codesandbox.io/checkout',{
            token,
            basket
        });
        if (responce.data == "success") {
        toast("Success! Check email for details", { type: "success" });
        } else {
        toast("Something went wrong", { type: "error" });
        }
    }
    
  return (
    <div className='payment'>
        <h1>Payment</h1>
        <div className='payment__container'>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review item and delivery</h3>
                </div>
                <div className='payement__item'>
                    {
                        basket.map(item=>(
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>


            <div className='payment__section'>
                    <div className='payment__title'>
                        <h3> Payment Methord</h3>
                    </div>
                    <div className='payment__details'>
                        {/* strip form ... */}
                        <StripeCheckout
                        stripeKey='pk_test_51L2yA3SGCfvNjyemswfuUpnSHgSlWEOW1iR3N9PD069j8SQMGZmlxYiIjy3C6EfAGoEfz9bu4YjeInaBYZRhUiHb00KQrOw8DZ'
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={getBasketTotal(basket)*100}
                        />
                    </div>
                
            </div>
             
        </div>

    </div>
  )
}


export default Payment