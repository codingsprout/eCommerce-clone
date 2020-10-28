import React from 'react';
import moment from 'moment';
import './order.css';
import Cart from '../Cart/Cart';

function Order({ order }) {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>

      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {order.data.cart.map((item) => (
        <Cart
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default Order;
