import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import MenuItemList from '../restaurantMenu/MenuItemList';
import { clearCart } from "../../utils/redux/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items)
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  const totalAmount = cartItems.reduce((acc, cur) => acc + cur.card.info.price, 0)

  return (
    <>
      <div className="cart-title">
        <h2>Cart</h2>
        <button onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length == 0 ? <h3>Cart is empty. Add items to the cart!</h3> : <h3>Total Amount : {totalAmount / 100}</h3>}
      </div>
      <div className='cart-container'>
        <MenuItemList items={cartItems} showRemove={true} />
      </div>
    </>
  )
}

export default Cart;