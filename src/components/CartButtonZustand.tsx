"use client";
import {ShoppingCart} from "lucide-react";
import {Button} from "@/components/Button";
import {useContext} from "react";
import {CartContext} from "@/context/CartContext";
import Badge from "@/components/Badge";
import useCartStore from "@/store/productStore";

export const CartButtonZustand = ({...props}) => {
    const {cart} = useCartStore();

    return (
        <Button {...props}>
            <ShoppingCart/>
            <Badge>{cart.length}</Badge>
        </Button>
    );
}