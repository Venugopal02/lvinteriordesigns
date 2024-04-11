import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Gallery from './components/Gallery';
import ModularKitchen from './components/ModularKitchen';

const App = () => (
  <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route index element={<Home/>} />
        <Route  path='/'  element={<Home/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/ModularKitchen' element={<ModularKitchen/>} />
        <Route  path='*' element={<NotFound/>} />
    </Routes>   
  </BrowserRouter>
)

export default App;
