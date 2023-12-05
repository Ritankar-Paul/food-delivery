import "./RestaurantMenu.css"
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../../utils/hooks/useRestaurantMenu';
import RestaurantMenuCategory from './RestaurantMenuCategory';

const RestaurantMenu = () => {
 const {resId} = useParams();
 const restaurantData = useRestaurantMenu(resId); 
 if(restaurantData == null) return (<h3 className="loading">Loading...</h3>)
 const { name, locality, cuisines,costForTwoMessage , avgRating, totalRatingsString } = restaurantData.data.cards[0].card.card.info;
 const menuCategories = restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((info)=>info?.card?.card?.["@type"]== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className='restaurantInfo-container'>
      <div className="restaurantInfo">
        <div className="restaurantInfo-details">
          <h2>{name}</h2>
          <p className="para">{cuisines.join(", ")}</p>
          <p className="para">{locality}</p>
          <h5>{costForTwoMessage}</h5>
        </div>
        <div className="restaurantInfo-ratings">
          <h4>⭐{avgRating}</h4>
          <p className="para">{totalRatingsString}</p>
        </div>
      </div>
        { menuCategories.map((category)=> <RestaurantMenuCategory key={category?.card?.card?.title} data={category?.card?.card} /> )}
    </div>
  )
}

export default RestaurantMenu


// @type: 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'