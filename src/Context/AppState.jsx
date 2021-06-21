import { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [showCelsius, setShowCelsius] = useState(true);
  const [place, setPlace] = useState(null);
  const [weoid, setWeoid] = useState("2487956");

  useEffect(() => {
    getDefaultData(weoid);
  }, [weoid]);

  useEffect(() => {
    if (place !== null) {
      showPosition(place);
    }
  }, [place]);

  const addClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported");
    }
  };

  function showPosition(position) {
    setIsLoading(true);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    fetch(
      `https://cors-anywhere-venky.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=` +
        lat +
        "," +
        long
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWeoid(data[0].woeid);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getDefaultData = async (weoid) => {
    fetch(
      `https://cors-anywhere-venky.herokuapp.com/https://www.metaweather.com/api/location/${weoid}`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        weather,
        showCelsius,
        setShowCelsius,
        addClick,
        setPlace,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
