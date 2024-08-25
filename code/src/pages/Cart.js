import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import RestaurantMenuItems from "../components/RestaurantMenuItems"
import { clearCart, removeItem } from "../redux/cartSlice";
import emptyCart from "../assets/emptyCart.png"
import withCartTagRestaurantMenuItems from "../utils/withCartTagRestaurantMenuItems";

const Cart = () => {
    const [restaurantId, setRestaurantId] = useState(null);
    const { items, totalAmount, totalItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const CartTagRestaurantMenuItems = withCartTagRestaurantMenuItems(RestaurantMenuItems)

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('restaurantId'));
        if (id) {
            setRestaurantId(id);
        }
    }, []);

    const handleReduceQuantity = ({ item, quantity }) => {
        dispatch(removeItem({ id: item.id, quantity }))
    }

    const totalAmountFixed = Number.parseFloat(totalAmount).toFixed(2)

    return (
        <div className="w-6/12 m-auto">
            <h1 className="font-bold text-3xl">Cart</h1>
            {totalItems ? <div>
                {items?.map((itemDetails) => (
                    <div key={itemDetails.id}>
                        <CartTagRestaurantMenuItems
                            item={itemDetails.item}
                            quantity={itemDetails.quantity}
                            onReduceQuantity={handleReduceQuantity}
                            price={Number.parseFloat(itemDetails.price).toFixed(2)} />
                    </div>
                ))}
                <div className="">
                    <p className="font-bold text-xl my-2 py-2">Order Summary</p>
                    <p className="font-semibold text-lg flex justify-between mx-4">
                        <span >Items in Cart:</span>
                        <span className="mr-4">{totalItems} items </span>
                    </p>
                    <p className="font-semibold text-lg flex justify-between mx-4">
                        <span >Savings</span> <span className="mr-4">₹ 0.00</span>
                    </p>
                    <p className="font-bold text-lg flex justify-between mx-4">
                        <span >Total Amount:</span> <span className="mr-4"> ₹ {totalAmountFixed}</span>
                    </p>
                </div>
                <div className="border-t-slate-500 border-t-2 my-6 py-3">
                    <p className="font-bold text-xl flex justify-between mx-4">
                        <span>Total Amount:</span>
                        <span className="mr-4"> ₹ {totalAmountFixed}</span>
                    </p>
                </div>
                <div className="flex justify-around">
                    <button className="bg-slate-900 text-white w-1/3 rounded-lg px-6 py-4"
                        onClick={() => navigate(`/restaurant/${restaurantId}`)}>
                        Add More Items to Cart
                    </button>
                    <button className="bg-slate-900 text-white  w-1/3 rounded-lg px-6 py-4"
                        onClick={() => dispatch(clearCart())}>
                        Empty Cart
                    </button>
                </div>
            </div> :
                <div className="text-center my-6">
                    <img className='m-auto my-8' src={emptyCart} alt="empty cart" />
                    <p className="my-4  text-xl text-slate-500">sorry mate.. no item found in your cart</p>
                    <button className="bg-slate-900 text-white rounded-lg px-6 py-4"
                        // navigate to previous page but should navigate to menu page 
                        onClick={() => navigate(`/restaurant/${restaurantId}`)}>
                        Add Items to Cart
                    </button>
                </div>}
        </div>
    )
}

export default Cart