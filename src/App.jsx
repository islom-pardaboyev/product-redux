import React from "react";
import CustomRoutes from "./routes";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="relative z-20">
      <Navbar />
      </div>
      <CustomRoutes />
    </>
  );
}

export default App;
