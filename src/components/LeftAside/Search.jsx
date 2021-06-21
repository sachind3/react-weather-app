import { useContext, useEffect, useState } from "react";
import { MdSearch, MdChevronLeft, MdLocationOn } from "react-icons/md";
import AppContext from "../../Context/AppContext";

const Search = ({ setToggle }) => {
  const { setPlace } = useContext(AppContext);
  const [address, setAddress] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const handleSelect = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    let val = address.split(" ").join("+");
    fetch(`https://nominatim.openstreetmap.org/search/?city=${val}&format=json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSuggestion(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [address]);

  const getPlace = (loc) => {
    const coords = {
      latitude: loc.lat,
      longitude: loc.lon,
    };
    setPlace({ coords });
    setToggle(false);
  };

  return (
    <div className="text-white flex flex-col justify-start h-full text-center p-5 sm:p-10">
      <div className="grid grid-cols-7 gap-2  text-gray-500 ">
        <button
          className="col-span-1 bg-gray-700 text-white p-2 focus:outline-none flex justify-center items-center"
          onClick={() => setToggle(false)}
        >
          <MdChevronLeft className="text-2xl" />
        </button>
        <div className="relative col-span-6 focus-within:text-white">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MdSearch className="text-2xl" />
          </div>
          <input
            type="text"
            placeholder="Search location"
            className=" w-full focus:outline-none border border-white bg-transparent text-white px-4 py-3 pl-12"
            value={address}
            onChange={(e) => handleSelect(e)}
          />
        </div>
        {/* <button
          className="col-span-2 bg-blue-600 text-white p-2 focus:outline-none"
          onClick={handleSelect}
        >
          Search
        </button> */}
      </div>
      {suggestion.length > 0 && (
        <ul className="w-full bg-white  shadow-md">
          {suggestion.map((item, index) => {
            return (
              <li
                key={index}
                className="text-blue-900  text-left flex items-start py-2 border-b px-2 cursor-pointer hover:bg-gray-100"
                onClick={() => getPlace(item)}
              >
                <MdLocationOn className="text-lg mr-1 w-4" />
                <span className="flex-1 text-sm">{item.display_name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
