import './App.css';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Findbreed from './Components/Findbreed';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Nv from './Components/Nv';
import Topbar from './Components/Topbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Topbar />
      <Router>
      <Nv />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Findbreed' element={<Findbreed/>} />
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='Contactus' element={<Contactus/>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
