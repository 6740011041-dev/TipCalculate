"use client";
import Image from "next/image";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="bg-blue-200 border-2 rounded-2xl m-1 ">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button className="bg-blue-500 border-1.5 rounded-1xl flex justify-between ">ADD</button>
    </div>
    
  );
};

export default ProductCard