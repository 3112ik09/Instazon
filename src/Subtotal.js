import React from 'react'; 
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useNavigate} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import { toast } from "react-toastify";
function Subtotal() {
    const history = useNavigate();
    const [{basket} , dispatch] = useStateValue();
    // console.log(basket);
    async function handleToken(token)
    {
        // console.log({token , addresses})
        toast("Success! Check email for details", { type: "success" });
    }

  return (
    <div className='subtotal'>
        {/* for currency formatting in react  */}
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <StripeCheckout
                        stripeKey='pk_test_51L2yA3SGCfvNjyemswfuUpnSHgSlWEOW1iR3N9PD069j8SQMGZmlxYiIjy3C6EfAGoEfz9bu4YjeInaBYZRhUiHb00KQrOw8DZ'
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={getBasketTotal(basket)*100}
                        />
    </div>

  )
}

export default Subtotal