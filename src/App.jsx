
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from "./pages/CheckOut";
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { CartProvider } from "./context/CartContext";


const App = () => {
  return (  
    <CartProvider>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer></Footer>

    </Router>
    </CartProvider>
  )
}

export default App;