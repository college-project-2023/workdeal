import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
// inital state data
const initialState = {
  activeMenu: "",
  menuOpen: false,
  scrollY: 0,
};
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
      className={
        currentRoute === "/"
          ? "header-1 sticky_top"
          : currentRoute === "/index2"
          ? "header-2 sticky_top"
          : currentRoute === "/index3"
          ? "header-3 sticky_top"
          : "header-2 sticky_top"
      }
    >
      <div className="header-logo">
        <Link legacyBehavior href="/">
          <a>
            <img
              src={
                currentRoute === "/"
                  ? "assets/images/logo.svg"
                  : currentRoute === "/index2"
                  ? "assets/images/home2/logo.svg"
                  : currentRoute === "/index3"
                  ? "assets/images/home3/logo.svg"
                  : "assets/images/home2/logo.svg"
              }
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
                  src={
                    currentRoute === "/"
                      ? "assets/images/logo.svg"
                      : currentRoute === "/index2"
                      ? "assets/images/home2/logo.svg"
                      : currentRoute === "/index3"
                      ? "assets/images/home3/logo.svg"
                      : "assets/images/home2/logo.svg"
                  }
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
                <a>Home</a>
              </Link>
              <i
                className="bi bi-chevron-down"
                onClick={() => handleMenu("home-one")}
              />
              <ul
                className={
                  state.activeMenu === "home-one"
                    ? "sub-menu d-block"
                    : "sub-menu"
                }
              >
                <li>
                  <Link legacyBehavior href="/">
                    <a className={currentRoute === "/" ? "active" : ""}>
                      Home 01
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index2">
                    <a className={currentRoute === "/index2" ? "active" : ""}>
                      Home 02
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index3">
                    <a className={currentRoute === "/index3" ? "active" : ""}>
                      Home 03
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className={currentRoute === "/about" ? "active" : ""}>
                  About Us
                </a>
              </Link>
            </li>
            <li className="has-child">
              <Link legacyBehavior href="/service">
                <a className={currentRoute === "/service" ? "active" : ""}>
                  Services
                </a>
              </Link>
              <i
                className="bi bi-chevron-down"
                onClick={() => handleMenu("service")}
              />
              <ul
                className={
                  state.activeMenu === "service"
                    ? "sub-menu d-block"
                    : "sub-menu"
                }
              >
                <li>
                  <Link legacyBehavior href="/service">
                    <a className={currentRoute === "/service" ? "active" : ""}>
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service-details">
                    <a
                      className={
                        currentRoute === "/service-details" ? "active" : ""
                      }
                    >
                      Service Details
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-child">
              <Link legacyBehavior href="/blog">
                <a>Blogs</a>
              </Link>
              <i
                className="bi bi-chevron-down"
                onClick={() => handleMenu("blog")}
              />
              <ul
                className={
                  state.activeMenu === "blog" ? "sub-menu d-block" : "sub-menu"
                }
              >
                <li>
                  <Link legacyBehavior href="/blog">
                    <a className={currentRoute === "/blog" ? "active" : ""}>
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-sidebar">
                    <a
                      className={
                        currentRoute === "/blog-sidebar" ? "active" : ""
                      }
                    >
                      Blog Sidebar
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a
                      className={
                        currentRoute === "/blog-standard" ? "active" : ""
                      }
                    >
                      Blog Standard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-details">
                    <a
                      className={
                        currentRoute === "/blog-details" ? "active" : ""
                      }
                    >
                      Blog Details
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-child">
              <a href="#">Pages</a>
              <i
                className="bi bi-chevron-down"
                onClick={() => handleMenu("pages")}
              />
              <ul
                className={
                  state.activeMenu === "pages" ? "sub-menu d-block" : "sub-menu"
                }
              >
                <li>
                  <Link legacyBehavior href="/login">
                    <a className={currentRoute === "/login" ? "active" : ""}>
                      Login
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/sign-up">
                    <a className={currentRoute === "/sign-up" ? "active" : ""}>
                      Sign Up
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/error">
                    <a>Error 404</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/faq">
                    <a className={currentRoute === "/faq" ? "active" : ""}>
                      FAQs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/account">
                    <a className={currentRoute === "/account" ? "active" : ""}>
                      My Account
                    </a>
                  </Link>
                </li>
              </ul>
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
            <Link legacyBehavior href="/account">
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
        <div className="account-btn">
          <Link legacyBehavior href="/account">
            <a>My Account</a>
          </Link>
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
