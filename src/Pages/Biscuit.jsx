import React, { useContext } from 'react'
import Card from '../components/Card.jsx'
import UserContext from '../Context/context.js'

const Biscuit = () => {
  const {products}=useContext(UserContext)
  const biscuitProducts = products && products.filter(product=>product.category ==='Biscuit')
  return (
    <div className='grid grid-cols-4 product pl-4 bg-yellow-100 py-2 gap-[20px] mx-auto w-[98%]  my-5 '>
      {biscuitProducts && biscuitProducts.map((items,index)=>{
        return(
          <Card id={index} data={{title:items.title,price:items.price.cost,image:items.image.URL}}/>
        )
      })}
      
    </div>
  )
}

export default Biscuit