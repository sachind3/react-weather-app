import { MdNavigation } from "react-icons/md";
const BottomCard = ({
  title,
  direction,
  compass,
  speed,
  humidity,
  visibility,
  pressure,
}) => {
  return (
    <div className="glass text-center p-6 flex flex-col items-center text-white">
      <p className="mb-2">{title}</p>
      {speed && (
        <div className="flex flex-col">
          <div className="text-3xl">
            <span className="font-light text-6xl">{speed.toFixed(2)}</span> mph
          </div>
          <div className="text-xl flex justify-center items-center mt-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-600 mr-4">
              <MdNavigation style={{ transform: `rotate(${direction}deg)` }} />
            </div>{" "}
            {compass}
          </div>
        </div>
      )}
      {humidity && (
        <div className="flex flex-col w-full">
          <div className="text-3xl">
            <span className="font-light text-6xl">{humidity}</span> %
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex justify-between items-end text-xs mb-1">
              <span>0</span> <span>50</span> <span>100</span>
            </div>
            <div className="bg-white w-full rounded-lg h-2 overflow-hidden relative">
              <div
                className="bg-yellow-300 absolute left-0 top-0 h-full"
                style={{ width: `${humidity}%` }}
              ></div>
            </div>
            <div className="flex justify-end items-start text-xs mt-1">
              <span>%</span>
            </div>
          </div>
        </div>
      )}
      {visibility && (
        <div className="text-3xl">
          <span className="font-light text-6xl">{visibility.toFixed(1)}</span>{" "}
          miles
        </div>
      )}
      {pressure && (
        <div className="text-3xl">
          <span className="font-light text-6xl">{pressure}</span> mb
        </div>
      )}
    </div>
  );
};

export default BottomCard;
