import React from 'react';
import './Home.css';
import Product1 from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <div className="home__row">
            <Product1
              id="123"
              title="Men's Solid Pockets Casual Shirts"
              price={120.96}
              image="images/t2.jpg"
            />
            <Product1
              id="49"
              title="Summer Pure Cotton Mens Hawaiian Shirt"
              price={139.0}
              image="images/t3.jpg"
            />          
        </div>

        <div className="home__row">
        <Product1
                            id="93"
                            title="Gucci- Oblique"
                            price={1590}
                           
                            image="images/t6.jpg"
                        />
          <Product1
                        id="94"
                        title="Balenciaga -denim top"
                        price={1800}
                       
                        image="images/t5.jpg"
                    />
          <Product1
            id="32"
            title="Cream Cosy Sweater"
            price={450}
            image="images/t4.jpg"
          />
        </div>

        <div className="home__row">
          <Product1
            id="99"
            title="Checkered hoodie"
            price={495}
            image="images/t8.jpg"
          />
          <Product1
            id="56"
            title="Corduroy Plain hoodie"
            price={460}
            image="images/t9.jpg"
          />
          
        </div>
        </div>
        
    </div>

  )
}

export default Home