import './App.css';
import Contact from './Contact';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
