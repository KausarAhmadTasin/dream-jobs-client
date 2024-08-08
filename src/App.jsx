import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 dark:bg-[#1A1B1F]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
