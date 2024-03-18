import "./App.css";
import Border from "./components/Border";
import Home from "./components/Home";

function App() {
  return (
    <Home>
      <div className="flex justify-center items-center h-screen">
        <Border />
      </div>
    </Home>
  );
}

export default App;
