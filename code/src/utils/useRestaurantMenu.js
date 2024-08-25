import { useEffect, useState } from "react"
import { SWIGGY_BASE_URL, SWIGGY_RESTAURANT_MENU_URL } from './contants'

const useRestaurantMenu = (res) => {
    const [menuData, setMenuData] = useState(null)

    const fetchRestaurantMenu = async () => {
        const response = await fetch(`${SWIGGY_BASE_URL + SWIGGY_RESTAURANT_MENU_URL}restaurantId=${res}`)
        const json = await response.json();
        setMenuData(json?.data?.cards)
    }
    useEffect(() => {
        fetchRestaurantMenu()
    }, [])
    return menuData
}

export default useRestaurantMenu