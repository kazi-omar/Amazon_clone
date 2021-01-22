import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './layout/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route }
  from 'react-router-dom';
import Checkout from './components/Cart/Checkout';
import Login from './components/Login/Login';
import { auth, db } from './firebase/firebase';
import { useStateValue } from './context/StateProvider';
import Payment from './components/Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './components/Orders/Orders';
import Profile from './components/Profile/Profile';
import Footer from './layout/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';


const promise = loadStripe('pk_test_51HRubfIvizXGkTnyqXtniD9Amkb57POmKeYH8NxLSfR8C6BiUZNkRpOZMRmK3RuYynnHiQ114nVudoi2FmyVywDX000vGb5cxq');


function App() {

  const [profile, setProfile] = useState([]);
  const [{ user }, dispatch] = useStateValue()
  // const [{ }, dispatch] = useStateValue();
  // !listener
  useEffect(() => {
    auth
      .onAuthStateChanged(authUser => {
        console.log('the user is>>>', authUser);
        //TODO: keeps track of the user who logged in
        if (authUser) {

          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        } else {

          dispatch({
            type: 'SET_USER',
            user: null
          })

        }
      })
  }, [])

  useEffect(() => {
    if (user && profile) {
      db.collection('users').doc(user?.uid).collection('profile')
        .onSnapshot(snapshot => (
          setProfile(snapshot.docs.map(doc => doc.data()))
        ))
    }
    else
      setProfile([])
  }, [user])

  useEffect(() => {
    dispatch({
      type: "SET_PROFILE",
      userName: profile[0],
    });
  }, [profile])

  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
