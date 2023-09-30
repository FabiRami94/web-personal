
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import DownBar from './components/DownBar/DownBar';
import About from './components/About/About';
import Portafolio from './components/Portafolio/Portafolio';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div style={{background: '#215669', minHeight: '100vh',}}>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <div id="home">
          <Home></Home>
        </div>
        <div id="acerca">
          <About></About>
        </div>
        <div id="habilidades">
          <Skills></Skills>
        </div>        
        <div id="portafolio">
          <Portafolio></Portafolio>
        </div>
        <div id="contacto">
          <Contact></Contact>
        </div>
      </main>
      <div>
        <DownBar></DownBar>
      </div>
      {/* <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/acerca/experiencia' element={<About></About>}></Route>
        <Route path='/habilidades' element={<Skills></Skills>}></Route>
        <Route path='/portafolio' element={<Portafolio></Portafolio>}></Route>
        <Route path='/contacto' element={<Contact></Contact>}></Route>
      </Routes> 
      <DownBar></DownBar>   */}
    </div>
  );
}

export default App;
