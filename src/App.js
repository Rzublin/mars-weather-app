import React, { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <main class="mars-current-weather">
        <h1 class="main-title">Latest weather at Elysium Plantitia</h1>

        <div class="date">
          <h2 class="section-title section-title--date">Sol 377</h2>
          <p class="date__day">September 31</p>
        </div>

        <div class="temp">
          <h2 class="section-title">Temperature</h2>
          <p class="reading">High: -20°C</p>
          <p class="reading">Low: -120°C</p>
        </div>

        <div class="wind">
          <h2 class="section-title">Wind</h2>
          <p class="reading">75 kph</p>

          <div class="wind__direction">
            <p class="sr-only">45deg</p>

            {/*  update --direction custom prop
              to change arrow direction  */}
            <div class="wind__arrow"></div>
          </div>
        </div>

        <div class="info">
          <p>
            InSight is taking daily weather measurements (temperature, wind,
            pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
            plain near Mars’ equator.
          </p>
          <p>
            This is only a part of InSight’s mission.{" "}
            <a href="https://mars.nasa.gov/insight/mission/overview/">
              Click here
            </a>{" "}
            to find out more.
          </p>
        </div>

        <div class="unit">
          <label for="cel">°C</label>
          <input type="radio" id="cel" name="unit" checked />
          {/*  when unit__toggle is clicked
            checkbox needs to change */}
          <button class="unit__toggle"></button>
          <label for="fah">°F</label>
          <input type="radio" id="fah" name="unit" />
        </div>
      </main>

      <div class="previous-weather">
        {/*   When clicked, toggle '.show-weather'
     to .previous-weather div  */}
        <button for="weather-toggle" class="show-previous-weather">
          <span>&#8593;</span>{" "}
          <span class="sr-only">Show previous weather</span>
        </button>

        <h2 class="main-title previous-weather__title">Previous 7 days</h2>

        <div class="previous-days">
          <div class="previous-day">
            <h3 class="previous-day__sol"> Sol 371</h3>
            <p class="previous-day__date">Septermber 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -120°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol"> Sol 371</h3>
            <p class="previous-day__date">Septermber 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -120°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol"> Sol 371</h3>
            <p class="previous-day__date">Septermber 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -120°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol"> Sol 371</h3>
            <p class="previous-day__date">Septermber 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -120°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol"> Sol 371</h3>
            <p class="previous-day__date">Septermber 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -120°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol"> Sol 371</h3>
            <p class="previous-day__date">Septermber 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -120°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol"> Sol 371</h3>
            <p class="previous-day__date">Septermber 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -120°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
