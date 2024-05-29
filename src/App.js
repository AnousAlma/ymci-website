import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Dontate from './components/pages/Dontate.jsx';
import Contact from './components/pages/Contact.jsx';
import Info from './components/pages/Info.jsx';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/donate" element={<Dontate />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
  </ChakraProvider>
  );
}

export default App;
