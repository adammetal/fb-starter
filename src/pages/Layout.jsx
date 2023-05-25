import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CssBaseline, GlobalStyles } from "@mui/material";

function Layout() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: 'lightgrey' } }} />
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout;
