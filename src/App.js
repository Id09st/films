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
import Footer from "./components/Footer/Footer";
import Protected from "./components/Context/Protected";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Login from "./pages/Login/Login";

function App() {

  const [user, setUser] = useState({});
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwt_decode(response.credential);
    setUser(decoded);
    document.getElementById('buttonDiv').hidden = true;
    localStorage.setItem('user', JSON.stringify(decoded));
  }
  const handleLogOut = (e) => {
    setUser({});
    document.getElementById('buttonDiv').hidden = false;
    localStorage.removeItem('user');
  }
  useEffect(() => {
    /* global google*/
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "113465169398-dt9aenlps44jgcg75j66jc4sglhiuh3s.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "medium" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, []);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Protected><Home /></Protected>} />
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
        <Route path="/contact" element={<Protected><Contact /></Protected>} />
        <Route path="/about" element={<Protected><About /></Protected>} />
        <Route path="/news" element={<Protected><News /></Protected>} />
        <Route path="/add" element={<Protected><Add /></Protected>} />
        <Route path='*' element={<Login />}></Route>
        <Route path="/detail/:id" element={<Protected><Detail /></Protected>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
