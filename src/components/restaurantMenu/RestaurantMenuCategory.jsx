import { useState } from "react";
import MenuItemList from "./MenuItemList";
import "./RestaurantMenuCategory.css";

const RestaurantMenuCategory = ({ data }) => {
  const [showItemList, setShowItemList] = useState(true);
  const handleClick = () => {
    setShowItemList(!showItemList);
  }

  return (
    <div>
      <div className="restaurantMenuCategory-container">
        <div className="restaurantMenuCategory-title" onClick={handleClick}>
          <p className="restaurantMenuCategory-title-name">{data.title} ({data.itemCards.length})</p>
          <span>{showItemList ? "⇧" : "⇩"}</span>
        </div>
        {showItemList && <MenuItemList items={data.itemCards} />}
      </div>
    </div>
  )
}

export default RestaurantMenuCategory;