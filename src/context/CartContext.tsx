"use client";
import {createContext, useState} from "react";

export type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

type CartContextType = {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    isInCart: (productId: string) => boolean;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: (product) => {},
    removeFromCart: (productId) => {},
    isInCart: (productId) => {}
} as CartContextType);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (productId: string) => {
        setCart(cart.filter(product => product.id !== productId));
    }

    const isInCart = (productId: string) => {
        return cart.some(product => product.id === productId);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}