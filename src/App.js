import "./App.css";
import dog1 from "./images/dog1.png";
function App() {
  return (
    <div className="App h-screen w-full flex flex-col">
      <div className="h-[10vh] w-full flex text-4xl text-white bg-black justify-center items-center">DOGGO CLICKER</div>
      <div className="h-[90vh] flex">
        <div className="w-1/3 bg-[#F3D250] border-r-8 border-black flex flex-col items-center gap-12">
          <div className="w-1/3 bg-black bg-opacity-25 text-white rounded-xl p-3 mt-6 text-xl">Your Doggo Farm</div>
          <div className="w-full bg-black bg-opacity-40 text-white py-3 text-2xl">0 Dogs</div>
        </div>
        <div className="w-1/3 bg-[#90CCF4] border-r-8 border-black">bbbb</div>
        <div className="w-1/3 bg-[#F78888]">cccc</div>
      </div>
    </div>
  );
}

export default App;
