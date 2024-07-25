import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
