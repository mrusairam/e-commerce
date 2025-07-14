import Cards from "@/Components/main/Cards";
import { Product } from "@/library";
import CategoryListing from "@/Components/main/Category";
import React from "react";

export const metadata = {
  title: "Pasha-Store",
  description: "Welcome to MyStore - Shop latest trends online.",
}

export default function page() {
  return (
    <>
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white">
  <div className="w-full mt-3 lg:w-[20%] border-b-2 lg:border-b-0 lg:border-r-2">
    <CategoryListing/>
  </div>
  <div className="w-full lg:w-[80%] mt-6 lg:mt-6 px-4">
    <ProdcutListing />
  </div>
</div>
    </>
  )
}

const ProdcutListing = async () => {
    const data = await Product()
    return(
    <Cards data={data}/>)
}
