import styles from "../css/navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftDiv}>
      <img className={styles.bars} src="https://www.flaticon.com/svg/vstatic/svg/3917/3917762.svg?token=exp=1677429801~hmac=fa66a796fcca1515c6876df9b5e9c46c" widht="30px" height="30px"></img>
        <Link to="/">
          <img
            alt=""
            src={logo}
            style={{ width: "180px", height: "45px" }}
          ></img>
        </Link>
      </div>
      <div className={styles.midDiv}>
        <Link className={styles.navbuts} to="/services" activeStyle>
          <h5 className={styles.notbold}>Services</h5>
        </Link>
        <Link className={styles.navbuts} to="/industries" activeStyle>
          <h5 className={styles.notbold}>Industries</h5>
        </Link>
        <Link className={styles.navbuts} to="/associates" activeStyle>
          <h5 className={styles.notbold}>Associates</h5>
        </Link>
        <Link className={styles.navbuts} to="/about" activeStyle>
          <h5 className={styles.notbold}>About Us</h5>
        </Link>
        <Link className={styles.navbuts} to="/winsights" activeStyle>
          <h5 className={styles.notbold}>W-Insights</h5>
        </Link>
        <Link className={styles.navbuts} to="/contactus" activeStyle>
          <h5 className={styles.notbold}>Contact Us</h5>
        </Link>
      </div>
      <div className={styles.rightDiv}>
            <button className={styles.button} type='button'>Request Offer</button>
            <img className={styles.search} src="https://cdn-icons.flaticon.com/svg/3917/3917132.svg?token=exp=1677425714~hmac=2d882927ed8b0dbce9dcb011cdfe203e" widht="29px" height="29px"></img>
            </div>
    </div>
  );
};

export default Navbar;
