import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import moment from "moment";
import { getImageState, getCtoF } from "../../helpers/helpers";
const TopCard = (day) => {
  const { showCelsius } = useContext(AppContext);
  return (
    <div className="glass text-center p-6 flex flex-col items-center">
      <p className="text-white font-light">
        {moment(day.applicable_date).format("ll") ===
        moment().add(1, "days").format("ll")
          ? "Tommorow"
          : moment(day.applicable_date).format("ddd, D MMM")}
      </p>

      <img
        src={getImageState(day.weather_state_abbr)}
        alt="weather"
        width="50px"
        className="my-4"
      />
      <div className="flex justify-between items-center w-full">
        <span className="text-gray-200">
          {showCelsius
            ? Math.round(day.min_temp)
            : Math.round(getCtoF(day.min_temp))}
          {showCelsius ? "°C" : "°F"}
        </span>
        <span className="text-gray-400">
          {showCelsius
            ? Math.round(day.max_temp)
            : Math.round(getCtoF(day.max_temp))}
          {showCelsius ? "°C" : "°F"}
        </span>
      </div>
    </div>
  );
};

export default TopCard;
