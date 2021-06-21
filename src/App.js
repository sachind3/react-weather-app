import { useContext, useState } from "react";
import Layout from "./components/Layout";
import LeftAside from "./components/LeftAside/LeftAside";
import Search from "./components/LeftAside/Search";
import RightAside from "./components/RightAside/RightAside";
import Loader from "./components/Loader";
import AppContext from "./Context/AppContext";

function App() {
  const [toggle, setToggle] = useState(false);
  const { isLoading } = useContext(AppContext);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 h-full overflow-auto bg-dashboard bg-cover">
          <aside className="col-span-1 xl:col-span-2 lg:col-span-2 h-screen sm:h-full glass">
            {!toggle && <LeftAside toggle={toggle} setToggle={setToggle} />}
            {toggle && <Search toggle={toggle} setToggle={setToggle} />}
          </aside>
          <aside className="col-span-1 xl:col-span-6 lg:col-span-4 h-full">
            <RightAside />
          </aside>
        </div>
      )}

      {/* <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 h-full overflow-auto">
        <aside className="col-span-1 xl:col-span-2 lg:col-span-2 bg-blue-lighter h-screen sm:h-full md:bg-cloud-image md:bg-top lg:bg-cloud-image lg:bg-cloud-image-1 bg-no-repeat bg-top bg-contain">
          {!toggle && <LeftAside toggle={toggle} setToggle={setToggle} />}
          {toggle && <Search toggle={toggle} setToggle={setToggle} />}
        </aside>
        <aside className="col-span-1 xl:col-span-6 lg:col-span-4 h-full">
          <RightAside />
        </aside>
      </div> */}
    </Layout>
  );
}

export default App;
