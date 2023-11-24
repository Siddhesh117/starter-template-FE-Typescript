import adani_airport from "../../assets/pictures/adani.jpeg";
import adani_logo from "../../assets/pictures/adani_logo.png";
import styles from "./SignIn.module.css";
import SignInPage from "./SignIn";

const Index = () => {
  // CONSTANTS

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <img alt="adani_airport" src={adani_airport} />
          </div>
          <div className={`gx-app-login-content ${styles["signIn-form"]}`}>
            <img alt="adani_logo" src={adani_logo} className={`${styles["adani-logo"]}`} />
            <h6 className={styles["signIn-description"]}>Welcome to Adani Airports - Tagless Baggage</h6>
            <SignInPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
