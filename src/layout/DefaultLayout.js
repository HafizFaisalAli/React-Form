import { Outlet } from "react-router-dom";
import { Navbar } from "../components/index";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
