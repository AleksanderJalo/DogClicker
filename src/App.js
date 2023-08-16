import "./App.css";
import dog1 from "./images/dog1.png";
function App() {
  return (
    <div className="App h-screen w-full">
      <div className="h-full w-1/3  border-r-8 border-black bg-[#F3D250] flex-col justify-start gap-12 flex">
        <div className="w-full flex justify-center">
          <div className=" bg-black bg-opacity-25 p-2 w-1/2 rounded-xl text-2xl mt-6">
            Your Name Shelter
          </div>
        </div>

        <div className=" bg-black bg-opacity-50 py-2 w-full text-white"><div className="text-4xl">Dogs: 0</div>
        <div className="text-xl mt-2">Dogs per second: 0</div></div>
        <div className="flex justify-center h-1/3">
          <img src={dog1} alt="dog" className="h-3/4  " />
        </div>

        <div className="text-5xl"> CLICK THE DOG</div>
      </div>
    </div>
  );
}

export default App;
