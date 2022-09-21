import React, { useState } from "react";
import { useStateContext } from "../context/ContextProvider";

const Navbar = () => {
  const { setLang, setSearch, fetchNews } = useStateContext();
  const [input, setInput] = useState("");
  const [dropdown, setDropdown] = useState("weather");
  const handleSubmit = (input) => {
    if (dropdown === "weather") {
      setSearch(input);
    } else {
      fetchNews(input);
    }
    setInput("");
  };
  return (
    <div className="relative flex flex-col md:flex-row md:flex-wrap w-screen items-center justify-between px-2 bg-gray-900 mb-3">
      <div className=" text-white text-xl uppercase m-5 font-bold">
        Daily Updates
      </div>
      <div className="relative flex ">
        <select
          className="text-white mr-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          onChange={(e) => setDropdown(e.target.value)}
          name="type"
        >
          <option
            className="block rounded py-2 px-4 hover:bg-gray-100 "
            value="weather"
          >
            Weather
          </option>
          <option value="news">News</option>
        </select>
        {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div> */}
        <input
          className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={input}
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(input);
            }
          }}
          name="search"
        />
        <button
          type="submit"
          onClick={() => handleSubmit(input)}
          class="text-white ml-2 bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      <div className="m-5">
        <button
          class="text-white mr-5 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          id="lang"
          data-testid="lang-en"
          onClick={() => setLang("en")}
        >
          English
        </button>
        <button
          class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          id="lang"
          data-testid="lang-hi"
          onClick={() => setLang("hi")}
        >
          Hindi
        </button>
      </div>
    </div>
  );
};

export default Navbar;
