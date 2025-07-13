import React from "react";
import Cards from "../main/Cards";

export default async function FeaturedProdcut() {
  
  const response = await fetch("	https://fakestoreapi.in/api/products?limit=5&skip=5");
  const data = await response.json();


  return (
    <div className="w-full min-h-[60vh] bg-[#F2F4F5] px-6 py-10">
      <h1 className="text-4xl text-center font-serif font-medium text-black mb-10">
        Featured Products
      </h1>
      <Cards data={data}/>
    </div>
  );
}
