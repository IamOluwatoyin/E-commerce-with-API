//import {useEffect, useState} from 'react'
// import "./Hero.css"
// import ProductList from './ProductList'

// const Hero = () => {
//   const[categories, setCategories] = useState([])
//   const[products, setProducts] = useState([])
//   const[filteredproducts, setFilteredProducts] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState('')
//   const [num, setNumber] =useState(10)

//     const fetchCategories = async()=>{
//   try{
//     const res = await fetch("https://fakestoreapi.in/api/products/category",{mehtod:"GET"})
//     const data = await res.json()
//     if (data.status==="SUCCESS"){
//       setCategories(data.categories)
//     }
//     console.log('categories', data.categories)
//   }catch(err){
//     console.log("this is not working",err)
//   }

// }
  
// // console.log(categories)
//   useEffect(()=>{

//     fetchCategories()
//   },[])

//   useEffect(()=>{
//     const fetchProducts = async ()=>{
//       try{
//         // const res = await fetch("https://fakestoreapi.in/api/products?limit=150",{method:"GET"})
//         //first method if you want all product displayed, the below few product displayed then hover on all to see the all.
        
//         const res = await fetch(`https://fakestoreapi.in/api/products?limit=${num}`,{method:"GET"})
//         const data = await res.json()
//         if (data.status ==="SUCCESS"){
//           setProducts(data.products)
//           setFilteredProducts(data.products)
//         }
//         // console.log('All products', data)
//       }catch(err){
//         console.log('this is not working', err)
//       }
//     }
//     fetchProducts()
//   },[num])

//   console.log("All products from API",products)
  
//   useEffect(()=>{
//     if(selectedCategory === ""){
//       setFilteredProducts(products)
//     }else if(selectedCategory === "all"){
//       setNumber(150)
//     }
//     else {
//       const filteredproducts = products.filter(product=>product.category === selectedCategory)
//       setFilteredProducts(filteredproducts)
//     }
//   },[selectedCategory, products])
//   const handleCategoryChange=(category) => {
//      setSelectedCategory(category)
//   }
//   return (
//     <div>
//     <div className='Hero-container'>
//      <p>Filter By Category</p>

//      <main className='button_Wrapper'>
//       <button onClick={()=>handleCategoryChange('all')}>All</button>
//       {
//         categories.map((item,index)=>{
//           return(
//             <button key={index} onClick={()=>handleCategoryChange(item)}>
//               {item}
//             </button>
//           )
//         })
//       }
//      </main>
//      {filteredproducts.map((products) =>(
//       <div key={products.id} className='Produts-wrapper'>
//       <ProductList product={products} />
//       </div>
//      ))
//       }
      
//     </div>
//     </div>
//   )
// }

// export default Hero
