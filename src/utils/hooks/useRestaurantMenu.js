import { useEffect, useState } from 'react'
import { RES_MENU_API } from '../constant';

const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        getRestaurantMenu();
    }, [])

    const getRestaurantMenu = async () => {
        const data = await fetch(RES_MENU_API + resId);
        const menu = await data.json();
        setRestaurantMenu(menu);
    }


    return restaurantMenu;
}

export default useRestaurantMenu;