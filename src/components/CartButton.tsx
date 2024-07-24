"use client";
import {ShoppingCart} from "lucide-react";
import {Button} from "@/components/Button";
import {useContext} from "react";
import {CartContext} from "@/context/CartContext";
import Badge from "@/components/Badge";

export const CartButton = ({...props}) => {
    const {cart} = useContext(CartContext);

    return (
        <Button {...props}>
            <ShoppingCart/>
            <Badge>{cart.length}</Badge>
        </Button>
    );
}