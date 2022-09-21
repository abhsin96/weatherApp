import React from "react";

const News = ({ title, description }) => {
  return (
    <div className="block p-6 w-full m-5  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="font-normal flex flex-wrap text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default News;
