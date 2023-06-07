import "./App.css";
import FilmsPresentation from "./components/FilmsPresentation";
import Navigation from "./components/Nav/Navigation";
import Footer from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <FilmsDemo/> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
