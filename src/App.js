import React, { useEffect } from 'react';
import './App.css';
import Header from './component/Header/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home/home';
import Login from './page/Login/login';
import Checkout from './page/Checkout/checkout';
import { auth } from './firebase';
import { useStateValue } from './reducer/StateProvider';
import Payment from './page/Payment/payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './page/Orders/order';

const promise = loadStripe(
  'pk_test_51Hgtq1K6Z2ILZabMxvZiqVhn1zw1fbxWzEiJccPJZita5mDvA2VtKfsVt8Mcu4X0oBBa8bBrjD83nrcAmBVbfEBf001mqcVCCP'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('User', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
