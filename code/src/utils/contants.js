import cart from "../assets/cart.png"

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

export const CDN_MENU_ITEM_IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export const SWIGGY_BASE_URL = "https://www.swiggy.com/dapi/"
// export const SWIGGY_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
export const SWIGGY_URL = "restaurants/list/v5?lat=30.3397809&lng=76.3868797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const SWIGGY_RESTAURANT_MENU_URL = "menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3397809&lng=76.3868797&";

export const NAV_ITEMS = [{ name: "Home", id: "home", icon: "", link: "" },
{ name: "About Us ", id: "about", icon: "", link: 'about' },
{ name: "Contact", id: "contact", icon: "", link: 'contact' },
{ name: "Cart", id: "cart", icon: { cart }, link: 'cart' },
{ name: "Grocery", id: "grocery", icon: "", link: 'grocery' }
]