import Clear from "../images/Clear.png";
import Hail from "../images/Hail.png";
import HeavyCloud from "../images/HeavyCloud.png";
import HeavyRain from "../images/HeavyRain.png";
import LightCloud from "../images/LightCloud.png";
import LightRain from "../images/LightRain.png";
import Shower from "../images/Shower.png";
import Sleet from "../images/Sleet.png";
import Snow from "../images/Snow.png";
import Thunderstorm from "../images/Thunderstorm.png";

const getImageState = (state) => {
  let stateImg;
  switch (state) {
    case "sn":
      stateImg = Snow;
      break;
    case "sl":
      stateImg = Sleet;
      break;
    case "h":
      stateImg = Hail;
      break;
    case "t":
      stateImg = Thunderstorm;
      break;
    case "hr":
      stateImg = HeavyRain;
      break;
    case "lr":
      stateImg = LightRain;
      break;
    case "s":
      stateImg = Shower;
      break;
    case "hc":
      stateImg = HeavyCloud;
      break;
    case "lc":
      stateImg = LightCloud;
      break;
    case "c":
      stateImg = Clear;
      break;

    default:
      stateImg = Clear;
      break;
  }
  return stateImg;
};

const unitChanger = (unit, temp) => {
  if (unit === "fahrenheit") {
    let fahrenheit = (temp * 9) / 5 + 32;
    fahrenheit = fahrenheit.toFixed();
    return `${fahrenheit}°F`;
  } else {
    return `${temp}°C`;
  }
};

// const getDay = (fullDate) => {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     let newDate = new Date(fullDate);
//     let n = newDate.getDay();
//     return days[n];
// };
// const getDate = (fullDate) => {
//     let newDate = new Date(fullDate);
//     let n = newDate.getDate();
//     return n;
// };

// const getMonth = (fullDate) => {
//     const months = [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//     ];
//     let newDate = new Date(fullDate);
//     let n = newDate.getMonth();
//     return months[n];
// };

const getCtoF = (c) => {
  return (c / 5) * 9 + 32;
};

// const getWoeid = (latitude, longitude) => {
//   const url =
//     "https://cors-anywhere-venky.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=";
//   return fetch(url + latitude + "," + longitude)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data[0].woeid);
//       return data[0].woeid;
//     });
// };
export { unitChanger, getImageState, getCtoF };
