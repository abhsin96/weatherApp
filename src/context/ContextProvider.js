import React, { createContext, useContext, useState } from "react";
import axios from "axios";

//https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=96c98745ba728550fa3dbfe3e1ae9228

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [lati, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [lang, setLang] = useState("en");
  const [search, setSearch] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [temp, setTemp] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [weatherType, setWeatherType] = useState("");
  const [error, setError] = useState(false);
  const [icon, setIcon] = useState("");

  const fetch = (lang) => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://gnews.io/api/v4/search?token=c7da913ad9a115924778b299c8135150&q=headline&lang=${lang}&max=10`,
      headers: {
        Cookie: "PHPSESSID=jc4ahh65s2ejmeoao24m8dl4dd",
      },
    };

    axios(config)
      .then(function (response) {
        setNewsData(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchNews = (input) => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://gnews.io/api/v4/search?token=c7da913ad9a115924778b299c8135150&q=${input}&lang=${lang}&max=10`,
      headers: {
        Cookie: "PHPSESSID=jc4ahh65s2ejmeoao24m8dl4dd",
      },
    };

    axios(config)
      .then(function (response) {
        setNewsData(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const weatherDataBySearch = (search) => {
    setLoader(true);

    axios
      .get(
        `https://api.weatherbit.io/v2.0/current?city=${search}&key=16dae48051a341718efcceadefa9aeda`
      )
      .then((response) => {
        let data = response.data.data[0];
        console.log(response.data.data[0]);
        setLoader(false);
        setTemp(data.temp);
        setLocation(data.city_name);
        setCountry(data.country_code);
        setWeatherType(data.weather.description);
        setIcon(data.weather.icon);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWeatherData = async (lat, long) => {
    setLoader(true);

    axios
      .get(
        `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=16dae48051a341718efcceadefa9aeda`
      )
      .then((response) => {
        let data = response.data.data[0];
        console.log(response.data.data[0]);
        setLoader(false);
        setTemp(data.temp);
        setLocation(data.city_name);
        setCountry(data.country_code);
        setWeatherType(data.weather.description);
        setIcon(data.weather.icon);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <StateContext.Provider
      value={{
        getWeatherData,
        weatherDataBySearch,
        fetch,
        icon,
        temp,
        setTemp,
        location,
        fetchNews,
        setLocation,
        country,
        setCountry,
        weatherType,
        setWeatherType,
        error,
        setError,
        lati,
        setLat,
        long,
        setLong,
        lang,
        setLang,
        search,
        setSearch,
        newsData,
        setNewsData,
        loader,
        setLoader,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
