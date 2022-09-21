import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Weather from "./components/Weather";
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  const { setLat, setLong, newsData, loader, getWeatherData } =
    useStateContext();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLong(pos.coords.longitude);
      getWeatherData(pos.coords.latitude, pos.coords.longitude);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold  flex w-full justify-center">
        {" "}
        Weather
      </h1>
      <div className=" flex w-full justify-center">
        <Weather />
      </div>
      <div className="w-200 ">
        <h1 className="text-3xl flex w-full justify-center font-bold"> News</h1>
        {newsData.map((ele, i) => (
          <News key={i} {...ele} />
        ))}
      </div>
    </div>
  );
};

export default App;
