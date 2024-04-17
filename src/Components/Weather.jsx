import "./Weather.css";
import { FaWind } from "react-icons/fa";
import { MdWaves } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import React from "react";

const Weather = () => {
  let api_key = "e533810c40bc77511a0b9b40c4a0f765";

  const search = async () => {
    const inputs = document.getElementById("input");
    const Location = document.getElementById("location");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const temprature = document.getElementById("Temprature");
    const Icon = document.getElementById("Weather-Icon");
    const body = document.getElementById("body");

    if (inputs.value === "") {
      alert("Please Enter The Location");
    } else {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputs.value}&appid=${api_key}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      Location.innerHTML = data.name;
      humidity.innerHTML = `${data.main.humidity} %`;
      wind.innerHTML = `${data.wind.speed}km/h`;
      temprature.innerHTML = `${data.main.temp}°c `;
      console.log(data.weather[0].description);
      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        Icon.setAttribute(
          "src",
          `https://th.bing.com/th/id/R.c656eebdb3aa5ffb1aad3d95a667f6de?rik=asFZhNlkhj1gxg&pid=ImgRaw&r=0`
        );

        console.log(data.weather[0].description);
      } else if (
        data.weather[0].icon === "02d" ||
        data.weather[0].icon === "02n"
      ) {
        Icon.setAttribute(
          "src",
          `https://clipartcraft.com/images/clouds-clipart-weather-1.png`
        );
        console.log(data.weather[0].description);
      } else if (
        data.weather[0].icon === "03d" ||
        data.weather[0].icon === "03n"
      ) {
        Icon.setAttribute(
          "src",
          `https://clipart-library.com/images/dc9XgoeRi.png`
        );
        console.log(data.weather[0].description);
      }
      if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
        Icon.setAttribute(
          "src",
          `https://www.freeiconspng.com/uploads/clouds-png-22.png`
        );

        console.log(data.weather[0].description);
      } else if (
        data.weather[0].icon === "09d" ||
        data.weather[0].icon === "09n"
      ) {
        Icon.setAttribute(
          "src",
          `https://clipartcraft.com/images/clouds-clipart-weather-1.png`
        );
        console.log(data.weather[0].description);
      } else if (
        data.weather[0].icon === "10d" ||
        data.weather[0].icon === "10n"
      ) {
        Icon.setAttribute(
          "src",
          `https://pluspng.com/img-png/rain-and-sun-png-cloud-drizzle-rain-shower-storm-sun-weather-icon-512.png`
        );
        console.log(data.weather[0].description);
      } else if (
        data.weather[0].icon === "11d" ||
        data.weather[0].icon === "11n"
      ) {
        Icon.setAttribute(
          "src",
          `https://clipart-library.com/images/dc9XgoeRi.png`
        );
        console.log(data.weather[0].description);
      } else if (
        data.weather[0].icon === "13d" ||
        data.weather[0].icon === "13n"
      ) {
        Icon.setAttribute(
          "src",
          `https://www.transparentpng.com/thumb/snowflake/murVrw-blue-patterned-snowflake-png-transparent.png`
        );
        console.log(data.weather[0].description);
      } else if (
        data.weather[0].icon === "50d" ||
        data.weather[0].icon === "50n"
      ) {
        Icon.setAttribute(
          "src",
          `https://www.pngmart.com/files/3/Mist-PNG-Pic.png`
        );
        console.log(data.weather[0].description);
      }
    }
  };

  return (
    <section
      className="body d-flex justify-content-center align-items-center"
      id="body"
    >
      <div className="containers p-4 rounded-3 ">
        <div className="top-bar d-flex justify-content-evenly align-items-center">
          <input
            type="text"
            className="cityInput p-3 border rounded-4 w-75"
            placeholder="Search"
            id="input"
          />
          <div
            className="d-flex justify-content-center align-items-center search-icon text-black rounded-circle"
            onClick={search}
          >
            <FaSearch />
          </div>
        </div>
        <div className="Infos d-flex flex-column justify-content-center align-items-center pt-4 gap-2">
          <img
            src="https://clipart-library.com/images/8i68RxG4T.png"
            alt=""
            width={150}
            id="Weather-Icon"
          />
          <p className=" display-3 text-white fw-semibold" id="Temprature">
            15°c
          </p>
          <p className=" display-6 text-white fw-semibold" id="location">
            London
          </p>
        </div>
        <div className="Measures d-flex flex-row justify-content-around align-items-center">
          <div className="humidity">
            <div className="d-flex flex-row align-items-center justify-content-center text-white gap-2 fw-bold fs-4 ">
              <MdWaves />
              <p className="m-0" id="humidity">
                87%
              </p>
            </div>
            <p className="text-center text-white">humidity</p>
          </div>
          <div className="wind_speed">
            <div className="d-flex flex-row align-items-center justify-content-center text-white gap-2 fw-bold fs-4 ">
              <FaWind />
              <p className="m-0" id="wind">
                5.14km/h
              </p>
            </div>
            <p className="text-center text-white">wind speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
