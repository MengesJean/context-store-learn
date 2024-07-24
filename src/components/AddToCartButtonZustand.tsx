"use client";
import React, {useContext} from 'react';
import {Button} from "@/components/Button";
import useCartStore from "@/store/productStore";

const AddToCartButtonZustand = ({children, product}) => {
    const addToCart = useCartStore(s => s.addToCart)
    const removeFromCart = useCartStore(s => s.removeFromCart)
    const isInCart = useCartStore(s => s.cart.includes(product));

    const onToggleButton = () => {
        if (isInCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    }
    return (
        <div className={"flex items-center space-x-3 mt-4"}>
            <Button onClick={onToggleButton} disabled={isInCart}>
                {children}
            </Button>
            {isInCart && <Button variant={"danger"} onClick={onToggleButton}>Remove from cart</Button>}
        </div>
    );
};

export default AddToCartButtonZustand;