import {getProducts} from "@/actions/product";
import {Card, CardContent, CardFooter, CardImage} from "@/components/Card";
import AddToCartButton from "@/components/AddToCartButton";
import {Navigation, NavigationItem, NavigationList, NavigationLogo} from "@/components/Navigation";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="mx-auto min-h-screen w-full">
        <Navigation>
          <NavigationLogo>Cart learn</NavigationLogo>
          <NavigationList>
            <NavigationItem link={"/"}>Home</NavigationItem>
            <NavigationItem link={"/context"}>Context</NavigationItem>
            <NavigationItem link={"/zustand"}>Zustand</NavigationItem>
          </NavigationList>
        </Navigation>
    </div>
  );
}
