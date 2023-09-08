import React from "react";
import { Link } from "react-router-dom";
import MobileNavLinks from "./MobileNavLinks";

const HamburgerMenu = () => {
  function hamburgerHandleClick() {
    const mobileNavLinks = document.querySelector(".mobileNavLinks");
    mobileNavLinks.style.display =
      mobileNavLinks.style.display === "none" ? "flex" : "none";
  }

  function closeHandleClick() {
    const mobileNavLinks = document.querySelector(".mobileNavLinks");
    mobileNavLinks.style.display = "none";
  }



  return (
    <>
      <div
        onClick={hamburgerHandleClick}
        className="hamburger flex basis-1/4 text-white cursor-pointer md:hidden pl-2"
      >
        <svg
          className="w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>

      <div className="mobileNavLinks">
        <div onClick={closeHandleClick} className="closeMenu">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            className="absolute top-0 right-0 w-10 h-7 text-white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <MobileNavLinks closeHandleClick={closeHandleClick} />
      </div>
    </>
  );
};

  
export default HamburgerMenu;

{/*
const HamburgerMenu = () => {
  function hamburgerHandleClick() {
    const mobileNavLinks = document.querySelector(".mobileNavLinks");
    if (mobileNavLinks.style.display === "none") {
      mobileNavLinks.style.display = "flex";
    } else {
      mobileNavLinks.style.display = "none";
    }
  }

  function closeHandleClick() {
    const mobileNavLinks = document.querySelector(".mobileNavLinks");
    if (mobileNavLinks.style.display === "none") {
      mobileNavLinks.style.display = "flex";
    } else {
      mobileNavLinks.style.display = "none";
    }
  }

  const menuLinks = document.querySelectorAll(".menubtn");
menuLinks.forEach((link) => {
  link.onclick = () => {
    closeHandleClick();
  };
});


  return (
    <>
      <div
        onClick={hamburgerHandleClick}
        className="hamburger flex basis-1/4 text-white cursor-pointer md:hidden pl-2"
      >
        <svg
          className="w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>

      <div className="mobileNavLinks">
        <div onClick={closeHandleClick} className="closeMenu">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            className="absolute top-0 right-0 w-10 h-7 text-white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <Link to="/AmakuruPage">
          <span className="menubtn p-2">Amakuru</span>
        </Link>
        <Link to="/BettingTipsPage">
          <span className="menubtn p-2">BettingTips</span>
        </Link>
        <Link to="/VideosPage">
          <span className="menubtn p-2">Videos</span>
        </Link>
      </div>
    </>
  );
};
*/



/*
  const hamburger = document.querySelector(".hamburger");
  const mobileNavLinks = document.querySelector(".mobileNavLinks");
  const closeMenu = document.querySelector(".closeMenu");

  hamburger.addEventListener("click", () => {
    if (mobileNavLinks.style.display === "none") {
      mobileNavLinks.style.display = "flex";
    } else {
      mobileNavLinks.style.display = "none";
    }
  });

  closeMenu.addEventListener("click", () => {
    if (mobileNavLinks.style.display === "none") {
      mobileNavLinks.style.display = "flex";
    } else {
      mobileNavLinks.style.display = "none";
    }
  });
  
  return (
    <>
      <div className="hamburger flex basis-1/4 text-white cursor-pointer md:hidden pl-2">
        <svg
          className="w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>

      <div className="mobileNavLinks ">
        <div className="closeMenu">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            className="absolute top-0 right-0 w-10 h-7 text-white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <a href="#">Home</a>
        <a href="#">Amakuru</a>
        <a href="#">Intamba Mu Rugamba</a>
        <a href="#">Primus Ligue</a>
        <a href="#"> Buraya</a>
        <a href="#"> Afrika</a>
        <a href="#">Betting Tips</a>
        <a href="#">players</a>
        <a href="#">Fixtures and scores</a>
        <a href="#">stats & data</a>
      </div>
    </>
  );
};

export default HamburgerMenu;
*/}
