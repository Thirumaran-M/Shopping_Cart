function Cart({temp, index, removeFromCart, cart}) {
  return (
    <li key={index}><a className="dropdown-item d-flex justify-content-between">{temp.Name} - ${temp.Price - temp.Price/100 * 10}&#x2003;&#x2003;&#x2003;<button className="btn btn-outline-dark mt-auto" onClick={(e) => {e.preventDefault(); removeFromCart(temp)}}><i class="bi bi-trash-fill"></i></button></a></li>
  )
}

export default Cart