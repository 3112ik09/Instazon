import { MenuItem, Select } from '@mui/material';
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({id , title , image , price}) {
  const [{basket} , dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket= ()=>{
    //dispatch teh item to the data layer
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
          id:id,
          title:title,
          image:image, 
          price:price,
      },
    });
  }
  return (
    <div className='product'>
        <div class='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
        <img src={image}></img>
        <button onClick={addToBasket}> Add to Basket</button>
    </div>
  )
}

export default Product