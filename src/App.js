import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
