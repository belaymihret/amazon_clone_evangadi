import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";

import amazone_letter_logo from "../../assets/images/logo/amazon_letter_white_logo.png";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
// import { DataContext } from "../DataProvider/DataProvider";
// import { auth } from "../../Utility/firebase";

const Header = () => {
  let user = "fantahun";
  let totalItem = 0;
  // const [{ user, basket }, dispatch] = useContext(DataContext);
  // const totalItem = basket?.reduce((amount, item) => {
  //   return item.amount + amount;
  // }, 0);

  return (
    <section className={styles.fixed}>
      <section>
        <div className={styles.header__container}>
          {/* logo section */}
          <div className={styles.logo__container}>
            <Link to="/">
              <img src={amazone_letter_logo} alt="amazon logo" />
            </Link>
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={23} />
          </div>
          {/* other section */}
          <div className={styles.order__container}>
            <Link to="/" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/* <Link to={!user && "/auth"}> */}
            <Link to={!user && "/auth/signOut"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => (user ? auth.signOut() : null)}>
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
