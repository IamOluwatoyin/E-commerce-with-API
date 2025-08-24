import {useEffect, useState} from 'react'
import "./Hero.css"
import ProductList from './ProductList'



const Hero = () => {
  const[categories, setCategories] = useState([])
  const[products, setProducts] = useState([])
  const[filteredproducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

    const fetchCategories = async()=>{
  try{
    const res = await fetch("https://fakestoreapi.in/api/products/category",{mehtod:"GET"})
    const data = await res.json()
    if (data.status==="SUCCESS"){
      setCategories(data.categories)
    }
    console.log('categories', data.categories)
  }catch(err){
    console.log("this is not working",err)
  }

}
  
// console.log(categories)
  useEffect(()=>{

    fetchCategories()
  },[])

  useEffect(()=>{
    const fetchProducts = async ()=>{
      try{
        const res = await fetch("https://fakestoreapi.in/api/products?limit=150",{method:"GET"})
        const data = await res.json()
        if (data.status ==="SUCCESS"){
          setProducts(data.products)
          setFilteredProducts(data.products)
        }
        // console.log('All products', data)
      }catch(err){
        console.log('this is not working', err)
      }
    }
    fetchProducts()
  },[])

  console.log("All products from API",products)
  
  useEffect(()=>{
    if(selectedCategory === "all"){
      setFilteredProducts(products)
    }else {
      const filteredproducts = products.filter(product=>product.category === selectedCategory)
      setFilteredProducts(filteredproducts)
    }
  },[selectedCategory, products])
  const handleCategoryChange=(category) => {
     setSelectedCategory(category)
  }
  return (
    <div className='Hero-wrapper'>
    <div className='Hero-container'>
         <p> Filter By Category</p>
    
    
      <button onClick={()=>handleCategoryChange('all')} className={`button_Wrapper ${
            selectedCategory === "all" ? "active" : ""
          }`}>Show All</button>
      {
        categories.map((item,index)=>{
          return(
            <button key={index} onClick={()=>handleCategoryChange(item)} className={`button_Wrapper ${
              selectedCategory === item ? "active" : ""
            }`}>
              {item}
            </button>
          )
        })
      }
     </div>

     <div className='Produts-wrapper'>
     {filteredproducts.map((products) =>(
      <div key={products.id} >
      <ProductList product={products} />
      </div>
     ))
      }
      </div>
      
    
    </div>
  )
}

export default Hero
