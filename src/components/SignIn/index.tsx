import styles from "./SignIn.module.css";
import SignInPage from "./signIn";
// import Image from "../../assets/pictures/logo.png";
const Index = () => {
  // CONSTANTS

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            {/* <img alt="adani_airport" src={Image} /> */}
          </div>
          <div className={`gx-app-login-content ${styles["signIn-form"]}`}>
            {/* <img alt="logo" src={logo} className={`${styles["adani-logo"]}`} /> */}
            <h6 className={styles["signIn-description"]}>Welcome</h6>
            <SignInPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
