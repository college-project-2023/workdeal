import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
import { auth } from "../../firebase/firebase";
// inital state data
const initialState = {
  activeMenu: "",
  menuOpen: false,
  scrollY: 0,
};

function gotoaccount() {
  if (auth.currentUser != null) {
    window.location = "/account";
  } else {
    window.location = "/login";
  }
}

// usnig reducer to change logic
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      if (state.activeMenu === action.payload) {
        return { ...state, activeMenu: "", menuOpen: !state.menuOpen };
      } else {
        return {
          ...state,
          activeMenu: action.payload,
          menuOpen: !state.menuOpen,
        };
      }
    case "HOME_ONE":
      return { ...state, activeMenu: "home-one", menuOpen: !state.menuOpen };

    case "SERVICE":
      return { ...state, activeMenu: "service", menuOpen: !state.menuOpen };
    case "BLOG":
      return { ...state, activeMenu: "blog", menuOpen: !state.menuOpen };
    case "PAGES":
      return { ...state, activeMenu: "pages", menuOpen: !state.menuOpen };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return { ...state };
  }
}
function Header1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentRoute = useRouter().pathname;
  const headerRef = useRef(null);
  // menu fuction for toggle
  function handleMenu(menuName) {
    dispatch({ type: "TOGGLE", payload: menuName });
  }

  useEffect(() => {
    const burger = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".main-nav");
    const menuClose = document.querySelector(".remove");
    burger.addEventListener("click", () => {
      nav.classList.add("slidenav");
    });
    menuClose.addEventListener("click", () => {
      nav.classList.remove("slidenav");
    });
  });

  // sticky header
  useEffect(() => {
    const header = headerRef.current;

    function handleScroll() {
      if (window.pageYOffset > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      // just use one header class for your project
      className={"header-1 sticky_top"}
    >
      <div className="header-logo">
        <Link legacyBehavior href="/">
          <a>
            <img
              intrinsicsize="109x28"
              src={"assets/images/wlogo.png"}
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="main-menu">
        <nav className="main-nav">
          <div className="mobile-menu-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  /*style="max-width: 230px;
			position: absolute;
			top: 0;
			width: 100%;
			height: 80%;
			object-fit: cover;
			object-position: 55%;"*/

                  src={"assets/images/wlogo.png"}
                  alt=""
                />
              </a>
            </Link>
            <div className="remove">
              <i className="bi bi-plus-lg" />
            </div>
          </div>
          <ul>
            <li className="has-child active">
              <Link legacyBehavior href="/">
                <a className={currentRoute === "/" ? "active" : ""}>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className={currentRoute === "/about" ? "active" : ""}>
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service">
                <a className={currentRoute === "/service" ? "active" : ""}>
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/blog-details">
                <a className={currentRoute === "/blog-details" ? "active" : ""}>
                  What's going on
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className={currentRoute === "/contact" ? "active" : ""}>
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
          <div className="my-account">
            <Link legacyBehavior href="/sign-up-type">
              <a>My Account</a>
            </Link>
          </div>
        </nav>
      </div>
      <div className="header-right">
        <div className="phone">
          <div className="icon">
            <img src="assets/images/icons/phone.svg" alt="" />
          </div>
          <div className="phn-info">
            <span>Call Us Now</span>
            <a href="tel:01701111000">+880 170 1111 000</a>
          </div>
        </div>
        <div className="wishlist">
          <Link legacyBehavior href="/account">
            <a>
              <i className="bi bi-suit-heart" />
            </a>
          </Link>
        </div>
        <div className="account-btn" onClick={gotoaccount}>
          <a>My Account</a>
        </div>
        <div className="mobile-menu">
          <a href="#" className="cross-btn">
            <span className="cross-top" />
            <span className="cross-middle" />
            <span className="cross-bottom" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header1;
