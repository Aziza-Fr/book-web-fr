import Header from "./components/header/Header";
import "./styles.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Cart from "./pages/cart/Cart";
import Login from "./pages/forms/Login";
import ContactUs from "./pages/contact/ContactUs";
import Register from "./pages/forms/Register";
import BookCom from "./pages/book/BookCom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookcom/:id" element={<BookCom />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
