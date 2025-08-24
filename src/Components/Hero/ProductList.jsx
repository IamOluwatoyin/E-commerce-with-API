import React from 'react'
import "./ProductList.css"

const ProductList = ({product}) => {
  return (
    <div className='productlist-container'> 

       <div className='productlistImage-container'>
         <img src={product.image} alt='' className='product-image'/>
       </div>

       <div className='product-details'>
         <p>{product.title}</p>
         <p>${product.price}</p>
       </div>
       <button className='product-button'>view details</button>
    </div>
  )
}

export default ProductList
