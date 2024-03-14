//import dummyImage from './assets/6c757d.jpg';


function Card({item, addToCart, removeFromCart, cart}){
   // Stars rendering logic
   const numberOfStars = item.Review;
   const stars = [];

   for (let i = 0; i < numberOfStars; i++) {
       stars.push(<div key={i} className="bi-star-fill"></div>);
   }
    return(<>
    <div className="col mb-5">
      <div className="card h-100">
          {/* <!-- Sale badge--> */}
          <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
          {/* <!-- Product image--> */}
          <img className="card-img-top" src={item.Image} height={200} alt="..." />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
              <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">{item.Name}</h5>
                  {/* <!-- Stars --> */}
                  <div className="d-flex justify-content-center small text-warning mb-2">
                       {stars.length > 0 ? stars : <div>No reviews available</div>}
                  </div>
                  {/* <!-- Product price--> */}
                  <span className="text-muted text-decoration-line-through">${item.Price}</span> ${item.Price - item.Price/100 * 10}
              </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">{cart.some(product => product.id === item.id) ? (
                                <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(item)}>
                                    Remove from cart
                                </button>
                            ) : (
                                <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(item)}>
                                    Add to cart
                                </button>
                            )}</div>
          </div>
      </div>
  </div>
  </>)
}

export default Card;
