import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Navigation from "./components/Nav/Navigation";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Add from "./components/Add/Add";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
