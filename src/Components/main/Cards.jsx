'use client';
import React from 'react';
import { useCart } from '@/Components/main/CartContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Cards({ data }) {
  const { addToCart } = useCart();
  const router = useRouter();

  
  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast.success('Product added to cart!', {
      position: 'bottom-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {data?.products?.map((item) => (
        <div
          key={item.id}
          className="w-64 bg-white rounded-xl shadow-md p-5 cursor-pointer hover:shadow-lg transition"
          onClick={() => router.push(`/product/${item.id}`)} 
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-40 h-40 object-contain mx-auto mb-4"
          />

          <h3 className="text-center font-medium mb-2 line-clamp-2 min-h-[48px]">
            {item.title}
          </h3>

          <p className="text-center font-bold text-xl mb-4">${item.price}</p>

          <button
            onClick={(e) => handleAddToCart(e, item)}
            className="bg-[#EE4899] hover:bg-[#E82282] cursor-pointer text-white py-2 px-4 rounded w-full text-sm"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
