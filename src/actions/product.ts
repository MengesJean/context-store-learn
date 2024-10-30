export const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return res.json();
}