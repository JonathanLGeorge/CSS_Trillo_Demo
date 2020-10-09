import React from "react";
import hotel_1 from "../img/hotel-1.jpg";
import hotel_2 from "../img/hotel-2.jpg";
import hotel_3 from "../img/hotel-3.jpg";
import icon_star from "../img/SVG/star.svg";
import Description from "./Description";
function Main() {
  return (
    <main className="hotel-view">
      <div class="gallery">
        <figure class="gallery__item">
          <img src={hotel_1} alt="Photo of hotel 1" class="gallery__photo" />
        </figure>
        <figure class="gallery__item">
          <img src={hotel_2} alt="Photo of hotel 2" class="gallery__photo" />
        </figure>
        <figure class="gallery__item">
          <img src={hotel_3} alt="Photo of hotel 3" class="gallery__photo" />
        </figure>
      </div>
      <div class="overview">
        <h1 class="overview__heading">Hotel Las Palmas</h1>
        <div class="overview__stars">
          <svg class="overview__icon-star">
            <use href="../img/symbol-defs.svg#icon-magnifying-glass"></use>
          </svg>
          <svg class="overview__icon-star">
            <use href="../img/sprite.svg#icon-star"></use>
          </svg>
          <svg class="overview__icon-star">
            <use href={icon_star}></use>
          </svg>
          <svg class="overview__icon-star">
            <use href={icon_star}></use>
          </svg>

          <svg class="overview__icon-star">
            <use href={icon_star}></use>
          </svg>
        </div>
        <div class="overview__location">
          <svg class="overview__icon-location">
            <use href="img/sprite.svg#icon-location-pin"></use>
          </svg>
          <button class="btn-inline">Albufeira, Portugal</button>
        </div>

        <div class="overview__rating">
          <div class="overview__rating-average">8.6</div>
          <div class="overview__rating-count">429 votes</div>
        </div>
      </div>
      <Description />
    </main>
  );
}

export default Main;
