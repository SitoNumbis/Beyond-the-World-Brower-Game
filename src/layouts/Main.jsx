import { useState } from "react";
import { Outlet } from "react-router-dom";

// sito components
import SitoContainer from "sito-container";

// own components
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SitoContainer
      sx={{ width: "100vw", height: "100vh", flexDirection: "column" }}
    >
      <Navbar />
      <Sidebar open={showSidebar} handleClose={() => setShowSidebar(false)} />
      <Outlet />
      <Footer />
    </SitoContainer>
  );
};

export default Main;
