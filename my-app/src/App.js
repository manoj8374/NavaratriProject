import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import VideoComponent from './components/Video';
import Timer from './components/Timer';
import SlickComponent from './components/Slick';

function App() {
  return (
    <>
      <Navbar/>
      <VideoComponent/>
      <Timer/>
      <SlickComponent/>
    </>
    
  );
}

export default App;
