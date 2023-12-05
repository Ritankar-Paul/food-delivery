import "./MenuItemList.css";
import { RES_IMG_API } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/redux/cartSlice";

const MenuItemList = ({ items, showRemove }) => {
    
    const dispatch = useDispatch();

    const handleAddToCart = (item) =>{
        dispatch(addItem(item));
    }

    const handleRemoveItem = (i) =>{
        dispatch(removeItem(i));
    }


  return (
    <div>
        {items.map((item, i)=>(
            <div key={i} className="menuItem">
                <div className="food-details-container">
                    <div className="food-details">
                        <p>{item?.card?.info?.itemAttribute.vegClassifier == "VEG"? "🟢" : "🔴"}</p>
                        <h4>{item?.card?.info?.name}</h4>
                        <span> ₹ {item?.card?.info?.price? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 }</span>
                    </div>
                    <p className="food-description">{item?.card?.info?.description}</p>
                </div>
                <div className="food-image-container">
                    <div>
                        {showRemove == true? <button className="add-remove-btn" onClick={()=>handleRemoveItem(i)} >Remove</button> : <button type="button" onClick={()=>handleAddToCart(item)} className="add-remove-btn">ADD +</button>}
                    </div>
                    {item?.card?.info?.imageId && <img src={RES_IMG_API+item?.card?.info?.imageId} alt="food" className="food-image" />}
                </div>
            </div>
        ))}
    </div>
  )
}

export default MenuItemList