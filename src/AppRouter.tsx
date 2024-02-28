import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
