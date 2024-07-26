import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 dark:bg-[#1D232A]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
