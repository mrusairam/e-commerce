import Link from 'next/link'

const CategoryListing = async () => {
  
    const response = await fetch("https://fakestoreapi.in/api/products/category")
    const data = await response.json();
    const category = data.categories
    return(
        <>
        <h2 className=' mt-7 text-4xl font-bold font-serif text-center text-black'>Category</h2>
        <ul className='text-[20px] text-center text-black cursor-pointer '>
            {category.map((value,i)=>{return(
              <Link key={i} href={`/store/category/${value}`}>
                <li className='m-8 border-2 p-1 hover:text-[#EE4899]' key={i}>
                    {value}
                </li></Link>
            )})}
        </ul>
        </>
    )
  }

  export default CategoryListing