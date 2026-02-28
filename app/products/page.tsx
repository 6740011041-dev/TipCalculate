"use client";
import { useEffect, useState } from "react";
import ProductCard from "./productcard";

interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products?limit=10";

  useEffect(()=>{
     const fetchProducts = async () => {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts();
    },[])


  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {products.map((product:ProductItem ) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};
export default ProductPage;