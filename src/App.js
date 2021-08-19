import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/CheckoutMain/Checkout";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase/firebase";
import SingleProduct from "./components/Product/SingleProduct/SingleProduct";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/:product" component={SingleProduct} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
