import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Navigation from "./components/Nav/Navigation";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import News from "./pages/News/News";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
