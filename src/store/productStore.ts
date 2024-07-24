import {create} from "zustand";
import {Product} from "@/context/CartContext";

const useCartStore = create((set) => ({
    cart: [],
    removeFromCart: (id: string) => {
        set((state) => ({
            cart: state.cart.filter((product) => product.id !== id)
        }));
    },
    addToCart: (product: Product) => {
        set((state) => ({
            cart: [...state.cart, product]
        }));
    }
}));

export default useCartStore;