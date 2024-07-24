import {CartProvider} from "@/context/CartContext";
import {Navigation, NavigationItem, NavigationList, NavigationLogo} from "@/components/Navigation";
import {CartButton} from "@/components/CartButton";


import React from 'react';
import {CartButtonZustand} from "@/components/CartButtonZustand";

const Layout = ({
                    children,
                    sidebar
                }: Readonly<{
    children: React.ReactNode;
    sidebar: React.ReactNode;
}>) => {
    return (
        <>
            <Navigation>
                <NavigationLogo>Cart learn</NavigationLogo>
                <NavigationList>
                    <NavigationItem link={"/"}>Home</NavigationItem>
                    <NavigationItem link={"/context"}>Context</NavigationItem>
                    <NavigationItem link={"/zustand"}>Zustand</NavigationItem>
                    <CartButtonZustand/>
                </NavigationList>
            </Navigation>
            <main className={"px-4 grid grid-cols-8 py-4"}>
                <div className={"col-span-6"}>
                    {children}
                </div>
                <div className="col-span-2">
                    {sidebar}
                </div>
            </main>
        </>
    );
};

export default Layout;