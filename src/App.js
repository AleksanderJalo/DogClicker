import "./App.css";
import LeftSide from "./components/LeftSide";
import MiddleSide from "./components/MiddleSide";
import RightSide from "./components/RightSide";
function App() {

  return (
    <div className="h-screen w-full flex flex-col font-lalezar text-center">
      <div className="h-[10vh] w-full flex text-4xl text-white bg-black justify-center items-center">
        DOGGO CLICKER
      </div>
      <div className="h-[90vh] flex">
        <LeftSide/>
        <MiddleSide/>
        <RightSide/>
        
      </div>
    </div>
  );
}

export default App;
