import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Product from './Product';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {

  const [{basket} , dispatch] = useStateValue(); 
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <div>
               <h2 className='checkout__title'> Yours Shopping Basket
                </h2>
                {
                  basket.map(item=>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    >
                    </CheckoutProduct>
                  ))
                }
            </div>
        </div>
        <div className='checkout__right'>
          <Subtotal/>
          <br></br>
          <h3>Also like</h3>
          <Product
            id="56"
            title="Corduroy Plain hoodie"
            price={460}
            image="images/t9.jpg"
          />
          
          
        </div>

    </div>
  )
}

export default Checkout