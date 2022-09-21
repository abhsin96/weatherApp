import React, { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const Weather = () => {
  const {
    icon,
    temp,
    location,
    country,
    weatherType,
    lati,
    long,
    weatherDataBySearch,
    search,
    fetch,
    lang,
  } = useStateContext();
  useEffect(() => {
    weatherDataBySearch(search);
  }, [search]);

  useEffect(() => {
    fetch(lang);
  }, [lang]);

  const date = new Date();
  return (
    <div className="flex flex-col w-full m-10 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
        alt="weather"
      />
      <div className="grid grid-cols-2 gap-5 justify-between p-4 leading-normal uppercase ">
        <p className="flex justify-between ">
          <span>Latitude</span> <span> {lati}</span>
        </p>
        <p className="flex justify-between">
          <span>Longitude:</span> <span>{long}</span>
        </p>
        <p className="flex justify-between">
          <span>Temperature:</span>
          <span>{temp}</span>
        </p>
        <p className="flex justify-between">
          <span>Location:</span> <span>{location}</span>
        </p>
        <p className="flex justify-between">
          <span>Country:</span> <span>{country}</span>
        </p>
        <p className="flex justify-between">
          <span> Weather-type:{"    "} </span>
          <span>{weatherType}</span>
        </p>
        <p className="flex justify-between">
          <span>Date</span>
          <span>
            {date.getDate()}
            {date.toLocaleString("default", { month: "short" })}
            {date.getFullYear()}
          </span>
        </p>
        <p className="flex justify-between">
          <span>Day</span>
          <span>{date.toLocaleString("default", { weekday: "short" })}</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
