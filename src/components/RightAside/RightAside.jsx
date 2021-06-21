import { useContext } from "react";
import AppContext from "../../Context/AppContext";

import BottomCard from "../Cards/BottomCard";
import TopCard from "../Cards/TopCard";
const RightAside = () => {
  const { weather, showCelsius, setShowCelsius } = useContext(AppContext);

  const toggleTemp = () => {
    setShowCelsius(!showCelsius);
  };

  return (
    weather && (
      <div className="flex-col p-5 sm:p-10 pb-4 flex justify-between h-full">
        <div className="flex justify-end items-center mb-4">
          <button
            className={`rounded-full w-11 h-11 text-xl font-semibold ${
              showCelsius
                ? "bg-light-gray text-white"
                : "bg-gray-700 text-white"
            } focus:outline-none`}
            onClick={toggleTemp}
          >
            °C
          </button>
          <button
            className={`rounded-full w-11 h-11 text-xl font-semibold ml-4 ${
              !showCelsius
                ? "bg-light-gray text-white"
                : "bg-gray-700 text-white"
            } focus:outline-none`}
            onClick={toggleTemp}
          >
            °F
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {weather &&
            weather.consolidated_weather
              .filter((val) => val.id !== weather.consolidated_weather[0].id)
              .map((day) => {
                return (
                  <TopCard key={day.id} {...day} showCelsius={showCelsius} />
                );
              })}
        </div>
        <div className="flex flex-col mb-4">
          <h4 className="text-white font-medium text-2xl mb-4">
            Today's Hightlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <BottomCard
              title="Wind Status"
              direction={weather.consolidated_weather[0].wind_direction}
              compass={weather.consolidated_weather[0].wind_direction_compass}
              speed={weather.consolidated_weather[0].wind_speed}
            />
            <BottomCard
              title="Humidity"
              humidity={weather.consolidated_weather[0].humidity}
            />
            <BottomCard
              title="Visibility"
              visibility={weather.consolidated_weather[0].visibility}
            />
            <BottomCard
              title="Air Pressure"
              pressure={weather.consolidated_weather[0].air_pressure}
            />
          </div>
        </div>
        <div className="text-gray-400 text-xs text-center">
          Created by{" "}
          <a
            href="https://devchallenges.io/portfolio/sachind3"
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 underline"
          >
            sachind3
          </a>{" "}
          - devChallenges.io
        </div>
      </div>
    )
  );
};

export default RightAside;
