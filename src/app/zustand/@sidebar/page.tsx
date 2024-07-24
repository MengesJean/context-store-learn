"use client";
import React, {useContext} from 'react';
import Image from "next/image";
import useCartStore from "@/store/productStore";

export default function Sidebar() {
    const {cart} = useCartStore();

    return (
        <div className={"bg-white p-4"}>
            <h2 className={"text-2xl font-medium"}>Cart</h2>
            <p className={"text-sm text-gray-500"}>You have {cart.length} items in your cart</p>
            <div className={"mt-4"}>
                {cart.map((product) => (
                    <div key={product.id} className={"items-center gap-4 grid grid-cols-8"}>
                        <Image width={100} height={100} src={product.image} alt={"Product image"} className={"w-16 h-16 object-content rounded col-span-2"}/>
                        <h3 className={"font-medium col-span-4"}>{product.title}</h3>
                        <p className={"text-lg font-bold col-span-2"}>${product.price}</p>
                    </div>
                ))}
            </div>
            <div className={"mt-4 flex items-center justify-between"}>
                <h2 className={"text-2xl font-medium"}>Total</h2>
                <p className={"text-2xl font-bold"}>${cart.reduce((acc, product) => acc + product.price, 0)}</p>
            </div>
        </div>
    );
};