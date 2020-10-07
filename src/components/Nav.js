import React from "react";

function Nav() {
  return (
    <nav class="sidebar">
      <ul class="side-nav">
        <li class="side-nav__item side-nav__item--active">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon" />
            <span>Hotel</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon" />
            <span>Flight</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon" />
            <span>Car rental</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon" />
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div class="legal">&copy; 2020</div>
    </nav>
  );
}

export default Nav;
