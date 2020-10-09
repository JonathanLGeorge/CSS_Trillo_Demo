import React from "react";
import home from "../img/SVG/home.svg";
import flight from "../img/SVG/aircraft-take-off.svg";
import car from "../img/SVG/key.svg";
import tour from "../img/SVG/location-pin.svg";

function Nav() {
  return (
    <nav class="sidebar">
      <ul class="side-nav">
        <li class="side-nav__item side-nav__item--active">
          <a href="#" class="side-nav__link">
            <img classname="side-nav__icon " src={home} />
            <span>Hotel</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <img classname="side-nav__icon " src={flight} />
            <span>Flight</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <img classname="side-nav__icon " src={car} />
            <span>Car rental</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <img classname="side-nav__icon " src={tour} />
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div class="legal">&copy; 2020</div>
    </nav>
  );
}

export default Nav;
