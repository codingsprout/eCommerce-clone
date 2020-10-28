import React from 'react';
import { useStateValue } from '../../reducer/StateProvider';
import './Cart.css';

function Cart({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className='cart'>
      <img className='cart__image' src={image} alt='cartpic' />

      <div className='cart__info'>
        <p className='cart__title'>{title}</p>
        <p className='cart__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cart__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}

export default Cart;
