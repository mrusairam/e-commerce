'use client';

import React, { useState, useEffect } from "react";
import { useCart } from "@/Components/main/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetail({ params }) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.in/api/products/${params.id}`);
      const data = await res.json();
      setProduct(data.product);
    }
    fetchProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast.success("Your product is added!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  if (!product) {
    return <div className="text-center mt-20 text-lg">Loading product...</div>;
  }

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Image Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-[400px] object-contain rounded-lg transition duration-300 transform hover:-translate-y-2 cursor-pointer"
          />
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6 font-serif">{product.title}</h1>
          <p className="text-gray-700 mb-6 font-serif leading-relaxed">{product.description}</p>
          <p className="text-2xl font-semibold mb-8 text-[#EE4899]">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="bg-[#EE4899] hover:bg-[#e82282] text-white rounded-2xl px-10 py-3 cursor-pointer transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </>
  );
}
