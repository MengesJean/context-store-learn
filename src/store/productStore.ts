import {create} from "zustand";
import {ProductType} from "@/actions/product.type";

type CartStore = {
    cart: ProductType[];
    removeFromCart: (id: string) => void;
    addToCart: (product: ProductType) => void;
}

const useCartStore = create<CartStore>((set) => ({
    cart: [],
    removeFromCart: (id: string) => {
        set((state) => ({
            cart: state.cart.filter((product) => product.id !== id)
        }));
    },
    addToCart: (product: ProductType) => {
        set((state) => ({
            cart: [...state.cart, product]
        }));
    }
}));

export default useCartStore;