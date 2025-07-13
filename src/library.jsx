const  Product =  async ()=> {
    const response = await fetch("https://fakestoreapi.in/api/products?limit=150")
    const data = await response.json();
  return (data)
}

const  Category =  async () => {
  return (data.categories)
}

export {Product, Category}


