import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changeQuantity, removeItem } from "../features/cart/cartSlice";
import { checkout } from "../features/products/productsSlice";
import "../utils/styles/table.css";
const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartId = useSelector((state) => state.persistedReducer.login.user.id)
  const cartData = useSelector((state) => state.persistedReducer.cart.carts).find((cart) => cart.cartId === cartId)
  console.log(cart)
  
  const handleChange = (e, item) => {
    const qty = e.target.value
    dispatch(changeQuantity({cartId, item, qty}))
  }


  const totalPriceHandler = () => {
    const totalPriceCount = cart.reduce((total,item) => {
      return total+(item.price*item.quantity);
    }, 0)
    setTotalPrice(totalPriceCount)
  }

  const handleCheckout = () => {
    dispatch(checkout(cart))
  }

  const handleBack = () => {
    navigate('/')
  }

  const handleRemove = (item) => {
    dispatch(removeItem({cartId, item}))
  }

  useEffect(() => {
    totalPriceHandler()
    if(cartData){
      setCart(cartData.products)
    }
    console.log(cart)
    
  }, [cartData,cart])


  return(
    <div>
      <h1>CART</h1>
      {cart.length!==0?(
        <>
        
        <table>
        <tr>
          <td> product </td>
          <td> price </td>
          <td> quantity </td>
          <td> total </td>
          <td> remove </td>
        </tr>
          
        
        {cart.map((item) => {
          return (
          <tr>
            <td> {item.title} </td>
            <td> {item.price} </td>
            <td><input type="number"  value={item.quantity} onChange={(e) => handleChange(e, item)}/>  </td>
            <td> {item.price * item.quantity} </td>
            <td> <button onClick={() => handleRemove(item)}> click This</button></td>
          </tr>
        )})}
        <tr>
          <td colSpan="3"> Total Price</td>
          <td>{totalPrice}</td>
        </tr>
        </table>
        <button onClick={handleCheckout}> Checkout </button>
        </>
      ):(
        <div> Belum ada barang di cart</div>
      )}
      
      
       <br/>
      <button onClick={handleBack}> Back</button>
    </div>
  )
}

export default Cart;