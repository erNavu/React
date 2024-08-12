import { useEffect, useState } from "react";
import { SWIGGY_URL } from './contants'

const useRestaurantList = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const fetchRestaurantList = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        console.log("swiggy api", json)
        const resData = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(resData);
    };
    useEffect(() => {
        fetchRestaurantList()
    }, [])

    return restaurantList
}

export default useRestaurantList