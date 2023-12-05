import React, { useEffect, useState } from 'react'
import "./Body.css"
import Shimmer from './Shimmer';
import useRestaurantList from '../../utils/hooks/useRestaurantList';
import RestaurantCard from "./RestaurantCard";
import { Link } from 'react-router-dom';

const Body = () => {
  const restaurantList = useRestaurantList();
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  const handleSearch = async () => {
    setFilterRestaurantList(restaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())))
  }

  const handleTopRatedRestaurant = () => {
    setFilterRestaurantList(restaurantList.filter((restaurant) => restaurant.info.avgRatingString > 4));
  }

  const handleVegRestaurant = () => {
    setFilterRestaurantList(restaurantList.filter((restaurant) => restaurant?.info?.veg == true));
  }

  useEffect(() => {
    setFilterRestaurantList(restaurantList);
  }, [restaurantList])


  return restaurantList.length == 0 ? <Shimmer /> : (
    <div>
      <div className='search-container'>
        <div className='search-input-container'>
          <div>
            <input className='search-input' type="text" placeholder="Search for restaurants" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
            {searchInput && <button onClick={() => setSearchInput("")} className='clear-btn'>X</button>}
          </div>
          <div><button onClick={handleSearch} className='search-btn'>🔍Search</button></div>
        </div>
        <div className='filter-container'>
          <h4>Filter</h4>
          <button type='button' onClick={handleTopRatedRestaurant} className='restaurant-option'>Ratings 4.0+</button>
          <button type='button' onClick={handleVegRestaurant} className='restaurant-option'>Pure Veg</button>
        </div>
      </div>

      <div className='restaurantList-container'>
        <div>
          {filterRestaurantList.length == 0 && <h3>Not Found!!!</h3>}
          {filterRestaurantList.map((restaurant) => <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}> <RestaurantCard info={restaurant} /> </Link>)}
        </div>
      </div>
    </div>
  )
}

export default Body;