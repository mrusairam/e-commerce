import Cards from "@/Components/main/Cards";
import React from "react"
import CategoryListing from "@/Components/main/Category";

const  page = async ({params})=> {
    const cat = params.cat
    const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${cat}`)
    const data = await response.json();

  return (
    <>
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white">
  <div className="w-full mt-3 lg:w-[20%] border-b-2 lg:border-b-0 lg:border-r-2">
    <CategoryListing/>
  </div>
  <div className="w-full lg:w-[80%] mt-6 lg:mt-6 px-4">
    <Cards data={data} />
  </div>
</div>
    </>
  )
}

export default page