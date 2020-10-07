import React from "react";

function Main() {
  return (
    <main className="hotel-view">
      <div class="gallery">
        <figure class="gallery__item">
          <img
            src="img/hotel-1.jpg"
            alt="Photo of hotel 1"
            class="gallery__photo"
          />
        </figure>
        <figure class="gallery__item">
          <img
            src="img/hotel-2.jpg"
            alt="Photo of hotel 2"
            class="gallery__photo"
          />
        </figure>
        <figure class="gallery__item">
          <img
            src="img/hotel-3.jpg"
            alt="Photo of hotel 3"
            class="gallery__photo"
          />
        </figure>
      </div>
    </main>
  );
}

export default Main;
