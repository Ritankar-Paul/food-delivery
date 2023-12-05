import { Link } from "react-router-dom";
import logo from "../../assets/food.png";
import "./Header.css"
import { useSelector } from "react-redux";

const Header = () =>{
    const cartItems = useSelector(store=>store.cart.items);


    return (
    <div className="header-container">
        <div>
            <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
        </div>
        <div>
            <ul className="list-container">
                <Link to="/" className="list-item"> <li>Home</li></Link>
                <li className="list-item">About Us</li>
                <li className="list-item">Contact Us</li>
                <Link to="./cart"> <li className="list-item cart-btn">Cart{cartItems.length==0? null : -cartItems.length }</li></Link>
            </ul>
        </div>
    </div> 
    )
}


export default Header;