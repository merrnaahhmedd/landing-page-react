import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home.js'
import Services from './components/pages/services.js';
import Products from './components/pages/products.js';
import SignUp from './components/pages/signUp.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/services' exact Component={Services} />
          <Route path='/products' exact Component={Products} />
          <Route path='/signUp' exact Component={SignUp} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
