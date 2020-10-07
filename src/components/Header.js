import React, { Component } from "react";
import user from "../img/user.jpg";
export class Header extends Component {
  render() {
    return (
      <header class="header">
        <img src="img/logo.png" alt="trillo logo" class="logo" />

        <form action="#" class="search">
          <input
            type="text"
            class="search__input"
            placeholder="Search hotels"
          />
          <button class="search__button">
            <svg class="search__icon">
              <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>

        <nav class="user-nav">
          <div class="user-nav__icon-box">
            <svg class="user-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-bookmark"></use>
            </svg>
            <span class="user-nav__notification">7</span>
          </div>
          <div class="user-nav__icon-box">
            <svg class="user-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-chat"></use>
            </svg>
            <span class="user-nav__notification">13</span>
          </div>
          <div class="user-nav__user">
            <img src={user} alt="User photo" class="user-nav__user-photo" />
            <span class="user-nav__user-name">Jonathan</span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
