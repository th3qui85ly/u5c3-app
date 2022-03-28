import { Navbar } from './Components/Navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Products } from './Components/Products';
import { ProductPage } from './Components/ProductPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:productId" element={<ProductPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
