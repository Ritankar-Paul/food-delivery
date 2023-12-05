import { useEffect,useState } from "react";
import { RES_LIST_API } from "../constant.js"

const useRestaurantList = () => {
    const [restaurantList,setRestaurantList] = useState([]);

    useEffect(()=>{
        getRestaurantList();
    },[]);

    const getRestaurantList = async()=>{
        const data = await fetch(RES_LIST_API);
        const jsonData = await data.json();
        setRestaurantList(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    return restaurantList;

}

export default useRestaurantList;