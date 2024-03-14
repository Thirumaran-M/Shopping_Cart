//import dummyImage from './assets/6c757d.jpg';
import './App.css';
import Card from './card';
import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import iPhone14 from './assets/iPhone14.jpg';
import iPhone13 from './assets/iPhone13.jpg';
import GooglePixel from './assets/GooglePixel.jpg';
import iPad from './assets/iPad.jpg';
import Moto from './assets/Moto.jpg';
import Nokia from './assets/Nokia.jpg';
import OnePlus from './assets/OnePlus.jpg';
import Oppo from './assets/Oppo.jpg';
import Poco from './assets/Poco.jpg';
import Redmi from './assets/Redmi.jpg';
import Vivo from './assets/Vivo.jpg';
import M15 from './assets/M15.jpg';

function App() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.Price);
  };

  let removeFromCart = (item) => {
    const newCart = cart.filter((product) => product.id !== item.id);
    setCart(newCart);
    setTotal(total - item.Price);
  };

  let data = [{ id: 1, Name: "iPhone 14", Image: iPhone14, Price: 75000, Review: 5 },
  { id: 2, Name: "iPad 8th Gen", Image: iPad, Price: 45000, Review: 5 },
  { id: 3, Name: "iPhone 13", Image: iPhone13, Price: 50000, Review: 5 },
  { id: 4, Name: "Samsung M15", Image: M15, Price: 50000, Review: 3 },
  { id: 5, Name: "Google Pixel", Image: GooglePixel, Price: 55000, Review: 4 },
  { id: 6, Name: "Redmi 10A", Image: Redmi, Price: 10000, Review: 2 },
  { id: 7, Name: "One Plus", Image: OnePlus, Price: 50000, Review: 4 },
  { id: 8, Name: "Moto", Image: Moto, Price: 40000, Review: 4 },
  { id: 9, Name: "Oppo", Image: Oppo, Price: 25000, Review: 0 },
  { id: 10, Name: "Vivo", Image: Vivo, Price: 20000, Review: 3 },
  { id: 11, Name: "Poco", Image: Poco, Price: 20000, Review: 3 },
  { id: 12, Name: "Nokia", Image: Nokia, Price: 15000, Review: 4 }];
  return (
    <>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="btn btn-outline-dark" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi-cart-fill me-1"></i> Cart <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span></a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {cart.length === 0 ? (
              <li><a className="dropdown-item" href="#">Your Cart is Empty <i className="bi-cart-fill me-1"></i></a></li>
            ) : (<>
              {cart.map((temp, index) => (
                <li key={index}><a className="dropdown-item d-flex justify-content-between" href="#">{temp.Name} - ${temp.Price - temp.Price/100 * 10}&#x2003;&#x2003;&#x2003;<button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(temp)}><i class="bi bi-trash-fill"></i></button></a></li>
              ))}<li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"><b>Total Amount: ${total - total/100 * 10}</b></a></li></>
              
            )}
          </ul></li></ul>

            </form>
            </div></nav>
            {/* End of form */}
          </div>
        </div>
      </nav>
      {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop with Maran Mobiles</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop</p>
          </div>
        </div>
      </header>
      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((item, index) => {
              return <Card item={item} key={index} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />;
            })}
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Maran Digital Services 2024</p></div>
      </footer>
      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src="js/scripts.js"></script></>
  );
}

export default App;