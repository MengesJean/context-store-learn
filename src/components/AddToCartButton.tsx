"use client";
import React, {useContext} from 'react';
import {Button} from "@/components/Button";
import {CartContext} from "@/context/CartContext";

const AddToCartButton = ({children, product}) => {
    const {addToCart, removeFromCart, isInCart, cart} = useContext(CartContext);

    const onToggleButton = () => {
        if (isInCart(product.id)) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    }
    return (
        <div className={"flex items-center space-x-3 mt-4"}>
            <Button onClick={onToggleButton} disabled={isInCart(product.id)}>
                {children}
            </Button>
            {isInCart(product.id) && <Button variant={"danger"} onClick={onToggleButton}>Remove from cart</Button>}
        </div>
    );
};

export default AddToCartButton;