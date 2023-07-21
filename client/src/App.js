import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ResponsiveAppBar from "./components/Appbar/Appbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
