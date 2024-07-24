import {getProducts} from "@/actions/product";
import {Card, CardContent, CardFooter, CardImage} from "@/components/Card";
import AddToCartButton from "@/components/AddToCartButton";

export default async function Page() {
    const products = await getProducts();

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <Card key={product.id}>
                    <CardImage src={product.image} alt={"Product image"}/>
                    <CardContent>
                        <h2 className={"text-2xl font-medium mb-2 line-clamp-2 h-16"}>{product.title}</h2>
                        <p className={"line-clamp-3"}>{product.description}</p>
                    </CardContent>
                    <CardFooter>
                        <p className={"text-right text-4xl"}>${product.price}</p>
                        <AddToCartButton product={product}>Add to cart</AddToCartButton>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
