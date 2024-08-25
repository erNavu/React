import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        restaurantId: null,
        items: [], // Array to hold cart items
        totalAmount: 0, // Total price of all items in the cart
        totalItems: 0, // Total number of items in the cart
    },
    reducers: {
        addItem(state, action) {
            const { id, price, item, restaurantId } = action.payload;
            // Check if item is already in the cart
            const existingItem = state.items.find(x => x.id === id);
            if (existingItem) {
                // Update quantity and total price
                existingItem.quantity += 1;
                state.totalAmount += price;
            }
            else {
                // Add new item to the cart
                state.items.push({ id, price, quantity: 1, item });
                state.totalAmount += price * 1;
            }
            // Update total number of items
            state.totalItems += 1;
            state.restaurantId = restaurantId
        },
        removeItem(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(x => x.id === id);

            if (existingItem) {
                // Update total amount and total items
                state.totalAmount -= existingItem.price;
                state.totalItems -= 1;
                if (quantity === 1) {
                    // Remove item from the cart
                    state.items = state.items.filter(item => item.id !== id);
                }
                else {
                    // reduce the quantity of item by 1
                    state.items.map((x) => {
                        if (x.id === id) { x['quantity'] -= 1 }
                    })
                }
            }
        },
        clearCart(state) {
            state.items.length = 0;
            state.totalAmount = 0;
            state.totalItems = 0;
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer