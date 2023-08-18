import "./App.css";
import theo from "./images/dog1.png";
function App() {
  return (
    <div className="h-screen w-full flex flex-col font-lalezar text-center">
      <div className="h-[10vh] w-full flex text-4xl text-white bg-black justify-center items-center">
        DOGGO CLICKER
      </div>
      <div className="h-[90vh] flex">
        <div className="w-1/3 bg-[#F3D250] border-r-8 border-black flex flex-col items-center">
          <div className="h-1/4 w-full flex-col flex gap-4 items-center">
          <div className="w-1/3 bg-black bg-opacity-25 text-white rounded-xl p-3 mt-6 text-xl">
            Your Doggo Farm
          </div>
          <div className="w-full bg-black bg-opacity-40 text-white py-3">
            <div className=" text-2xl">0 Dogs</div>
            <div className=" text-xl">per second: 0.0 </div>
            </div>
            </div>
          <div className="flex flex-col gap-3 h-1/2">
            <div className="text-3xl text-white">Theo</div>
            <img src={theo} alt="Theo" className="mr-8 h-full" />
          </div>
          <div className="h-1/4 flex items-end pb-6">
            <div className="text-6xl text-white">
              <span className="-rotate-32 transform-gpu">C</span></div>


          </div>
          
        </div>
        
        <div className="w-1/3 bg-[#90CCF4] border-r-8 border-black">bbbb</div>
        <div className="w-1/3 bg-[#F78888]">cccc</div>
      </div>
    </div>
  );
}

export default App;
