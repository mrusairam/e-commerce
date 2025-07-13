import React from "react";
import Cards from "../main/Cards";

export default async function RecentlyAdded() {

    const response = await fetch("https://fakestoreapi.in/api/products?page=5&limit=5");
    const data = await response.json();

  return (
    <div className="w-full min-h-[60vh] bg-[#F2F4F5] px-6 py-10">
      <h1 className="text-4xl text-center font-serif font-medium text-black mb-10">
        Recently Added
      </h1>
     <Cards data={data}/>
    </div>
  );
}
