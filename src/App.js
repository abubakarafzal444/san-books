import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

import CombinedLandingPage from "./Pages/LandingPage/CombinedLandingPage";
import CombinedProductPage from "./Pages/ProductPage/CombinedProductPage";
function App() {
  return (
    <>
      <div className="App">
        <NavigationBar />

        <div className={styles.pageControl}>
          <CombinedLandingPage />
          {/* <CombinedProductPage /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
