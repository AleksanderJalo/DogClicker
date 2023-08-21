import "./App.css";
import mouseBooth from "./images/upgrade art/mouse_booth.png"
import LeftSide from "./components/LeftSide";
import MiddleSide from "./components/MiddleSide";
function App() {

  return (
    <div className="h-screen w-full flex flex-col font-lalezar text-center">
      <div className="h-[10vh] w-full flex text-4xl text-white bg-black justify-center items-center">
        DOGGO CLICKER
      </div>
      <div className="h-[90vh] flex">
        <LeftSide/>
        <MiddleSide/>

        <div className="w-1/3 bg-[#90CCF4] border-l-8 border-black h-[90vh]">
          <div className="h-1/4 w-full flex flex-col items-center gap-4  border-b-4 border-black justify-end py-6">
            <div className="w-1/2 rounded-xl bg-black bg-opacity-25 text-white text-xl xl:text-3xl p-3 mt-6">
              Shop
            </div>
            <div className="w-full flex justify-between px-2 h-1/3 gap-2 overflow-hidden flex-wrap">
              <img src={mouseBooth} className="h-full" />
              <img src={mouseBooth} className="h-full" />
              <img src={mouseBooth} className="h-full" />
              <img src={mouseBooth} className="h-full" />
              <img src={mouseBooth} className="h-full" />
              <img src={mouseBooth} className="h-full" />
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
