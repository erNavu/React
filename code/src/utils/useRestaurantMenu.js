import { useEffect, useState } from "react"
import { SWIGGY_RESTAURANT_MENU_URL } from './contants'

const useRestaurantMenu = (res) => {
    const [menuData, setMenuData] = useState(null)

    const fetchRestaurantMenu = async () => {
        const response = await fetch(`${SWIGGY_RESTAURANT_MENU_URL}restaurantId=${res}`)
        const json = await response.json();
        console.log("swiggy menu api", json)
        setMenuData(json?.data?.cards)
    }
    useEffect(() => {
        fetchRestaurantMenu()
    }, [])
    return menuData
}

export default useRestaurantMenu