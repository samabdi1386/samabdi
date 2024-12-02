import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';

import Test from './pages/Test';
import Navbar from './components/Navbar';
import SingleProduct from './pages/SingleProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/test' element={<Test/>} />
      <Route path='/Products/:id'  element={<SingleProduct/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
