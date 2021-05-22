import React, { useState } from "react";
import "./style.css";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleNavbar() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div>
      <div id="mySidenav" className={`sideNav ${isNavOpen?"sidenav sidenav-open":""}`}>
        <a href="#" className="closebtn" onClick={handleNavbar}>
          &times;
        </a>
        <a href="#">Search</a>
        <a href="#">Articles</a>
        <a href="#">Community Board</a>
        <a href="#">Log In</a>
      </div>

      <span onClick={handleNavbar}>open</span>
    </div>
  );
}

export default Nav;

// .sidenav {
//     display: none;
//     visibility: hidden;
    /* height: 100%; /* 100% Full-height */
    /* width: 0; 0 width - change this with JavaScript */
    /* position: fixed; Stay in place */
    /* z-index: 1; Stay on top */
    /* top: 0; Stay at the top */
    /* left: 0; */
    /* background-color: #111; Black */
    /* overflow-x: hidden; Disable horizontal scroll */
    /* padding-top: 60px; Place content 60px from the top */
    /* transition: 0.5s; 0.5 second transition effect to slide in the sidenav */ 
//   }
  
  /* The navigation menu links */
//   .sidenav a {
//     padding: 8px 8px 8px 32px;
//     text-decoration: none;
//     font-size: 25px;
//     color: #818181;
//     display: none;
//     visibility: hidden;
//     transition: 0.3s;
//    }
  
//    .sidenav-open a{
//        visibility: inherit;
//        display: block;
//    }
  
//    .sidenav-open {
//       display: block;
//       visibility: inherit;
//   }
  
  /* When you mouse over the navigation links, change their color */
  /* .sidenav a:hover {
    color: #f1f1f1;
  } */
  
//    Position and style the close button (top right corner) */
//   .sidenav .closebtn {
//     position: absolute;
//     top: 0;
//     right: 25px;
//     font-size: 36px;
//     margin-left: 50px;
//   } 
  
//   .sidenav-open {
//     display: block;
//   }
  
  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
//   #main {
//     transition: margin-left 0.5s;
//     padding: 20px;
//   }
  
  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
//   @media screen and (max-height: 450px) {
//     .sidenav {
//       padding-top: 15px;
//     }
//     .sidenav a {
//       font-size: 18px;
//     }
//   }
  