import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import moment from "moment";
import { getImageState, getCtoF } from "../../helpers/helpers";
import { MdMyLocation } from "react-icons/md";
import { MdPlace } from "react-icons/md";

const LeftAside = ({ setToggle }) => {
  const { weather, showCelsius, addClick } = useContext(AppContext);

  const showSearch = () => {
    setToggle(true);
  };

  return (
    weather && (
      <div className="flex-col p-5 sm:p-10 flex justify-between h-full">
        <div className="flex justify-between items-center">
          <button
            className="bg-light-gray text-white py-3 px-5 focus:outline-none"
            onClick={showSearch}
          >
            Search for places
          </button>
          <button
            className="rounded-full p-3 bg-light-gray text-white text-xl focus:outline-none"
            onClick={addClick}
          >
            <MdMyLocation />
          </button>
        </div>
        <div className="flex flex-col justify-start items-center my-6">
          <img
            src={getImageState(
              weather.consolidated_weather[0].weather_state_abbr
            )}
            alt="weather"
            width="200px"
          />
        </div>
        <div className="flex justify-center items-end">
          <p className="text-white text-8xl font-medium">
            {showCelsius
              ? Math.round(weather.consolidated_weather[0].the_temp)
              : Math.round(getCtoF(weather.consolidated_weather[0].the_temp))}
          </p>{" "}
          <span className="text-white text-5xl">
            {showCelsius ? "°C" : "°F"}
          </span>
        </div>
        <div className="text-4xl text-white font-light text-center">
          {weather.consolidated_weather[0].weather_state_name}
        </div>
        <div className="flex flex-col mt-6">
          <p className="text-xl text-white font-light text-center mb-2">
            Today .{" "}
            {moment(weather.consolidated_weather[0].applicable_date).format(
              "ddd, D MMM"
            )}
          </p>
          <p className="text-xl text-white font-light text-center flex justify-center items-center">
            <MdPlace className="mr-2" /> {weather.title}
          </p>
        </div>
      </div>
    )
  );
};

export default LeftAside;
