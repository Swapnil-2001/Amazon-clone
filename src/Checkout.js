import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './Subtotal';
import empty from './empty.svg';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div>
        <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        className="checkout__ad"
        alt="ad"
        />
        {basket?.length === 0 ? (
          <div className="empty__basket">
            <img src={empty} className="empty__image" />
            <div className="text">
              <h2 className="empty__heading">Your Amazon Basket is empty</h2>
              <p className="empty__text">To buy one or more items, click the "Add to Basket" button below the item.</p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                link = {item.link}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  )
}

export default Checkout;