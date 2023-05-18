import './App.css';
import FilmsPresentation from './components/FilmsPresentation';
import Navigation from './components/Navigation';
import Footer from './components/footer/Footer';
import { Main } from './components/main/Main';


function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <FilmsDemo/> */}
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default App;
