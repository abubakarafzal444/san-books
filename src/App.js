import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { itemLoadAction } from "./Store/Slices/itemLoader";
import CombinedAdminPanel from "./Admin Panel/CombinedAdminPanel";
import CombinedLandingPage from "./Pages/LandingPage/CombinedLandingPage";
import CombinedProductPage from "./Pages/ProductPage/CombinedProductPage";
import CartDisplay from "./Pages/CartDisplay/CombinedCartDisplay";
import UploadItem from "./Admin Panel/UploadItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { dataAction } from "./Store/Slices/DataControl";
import { cartItemActions } from "./Store/Slices/CartItems";
import ReceivedOrders from "./Admin Panel/ReceivedOrders";

// import ScrollToTop from "./Shared/ScrollToTop";

function App() {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://sanbooks-444-default-rtdb.firebaseio.com/TestRrecord.json")

      .then((res) => {
        let arr = res.data;
        var obj = arr;

        var arr_obj = Object.keys(obj).map((key) => ({ [key]: obj[key] }));

        let newArr = arr_obj?.map((person) => {
          for (const item in person) {
            return person[item];
          }
        });

        // let response = newArr;
        let response = newArr;
        setData(response);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(dataAction.dataReceiver({ data }));
      dispatch(itemLoadAction.setData({ data }));
      dispatch(cartItemActions.receiver({ data }));
    }

    dispatch(dataAction.newArrival());
    dispatch(dataAction.sale());
    dispatch(dataAction.monthSpecial());
    dispatch(dataAction.eventSpecial());
    dispatch(dataAction.bestSeller());
  }, [data]);

  return (
    <>
      <Router>
        {/* <ScrollToTop> */}
        <div className="App">
          <NavigationBar />

          <div className={styles.pageControl}>
            <Switch>
              <Route exact path="/">
                <CombinedLandingPage />
              </Route>
              <Route exact path="/CartDisplay">
                <CartDisplay />
              </Route>
              <Route exact path="/UploadBook">
                <UploadItem />
              </Route>
              <Route exact path="/product">
                <CombinedProductPage />
              </Route>
              <Route exact path="/AdminPanel">
                <CombinedAdminPanel />
              </Route>
              <Route exact path="/ReceivedOrders">
                <ReceivedOrders />
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
        {/* </ScrollToTop> */}
      </Router>
    </>
  );
}

export default App;
