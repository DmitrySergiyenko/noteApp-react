import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4'>
        <Alert />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
