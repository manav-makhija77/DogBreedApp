import './App.css';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Findbreed from './Components/Findbreed';
import Footer from './Components/Footer';
// import CaringNew from './Components/CaringNew';
import Home from './Components/Home';
import Nv from './Components/Nv';
import PleaseLogin from './Components/PleaseLogin';
import Topbar from './Components/Topbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Caring from './Components/Caring';


function App() {

  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('username'));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLogged(!!localStorage.getItem('username'));
  
    };

    const handleLoginEvent = () => {
      setIsLogged(true);
    };

    const handleLogoutEvent = () => {
      setIsLogged(false);
    };

    window.addEventListener('login', handleLoginEvent);
    window.addEventListener('logout', handleLogoutEvent);


    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('login', handleLoginEvent);
      window.removeEventListener('logout', handleLogoutEvent);
    };
  });

  return (
    <div>
      <Topbar isLogged={isLogged} />
      <Router>
        <Nv />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Findbreed' element={isLogged ? <Findbreed /> : <PleaseLogin />} />
          <Route path='/Caring' element={<Caring/>}/>
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='Contactus' element={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
