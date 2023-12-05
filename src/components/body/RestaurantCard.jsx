import "./RestaurantCard.css"
import {RES_IMG_API} from "../../utils/constant"

const RestaurantCard = ({info})=>{
    const { name, avgRatingString, sla, cuisines, areaName, cloudinaryImageId} = info?.info;
    return (
        <>
        <div className="restaurantCard-container">
            <img src={RES_IMG_API+cloudinaryImageId} alt="restaurantLogo" className="restaurant-Logo" />
            <h3 className="restaurantCard-name">{name}</h3>
            <h4>⭐{avgRatingString} - {sla.slaString}</h4>
            <p className="restaurantCard-cuisines">{cuisines.join(", ")}</p>
            <p>{areaName}</p>
        </div>
        </>
    )
        

    
}

export default RestaurantCard;