import { Routes, Route } from "react-router-dom";
import "./App.css";
import FilmsPresentation from "./components/FilmsPresentation";
import Navigation from "./components/Nav/Navigation";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import { HomePage } from "./pages/HomePage/HomePage";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {/* <FilmsDemo/> */}
      <Footer />
    </div>
  );
}

export default App;
