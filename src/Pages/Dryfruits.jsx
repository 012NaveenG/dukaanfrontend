import React, { useContext } from 'react'
import Card from '../components/Card.jsx'
import UserContext from '../Context/context.js'

const Dryfruits = () => {
  const {products}=useContext(UserContext)
  const dryfruitsProducts = products && products.filter(product => product.category ==='Dry Fruits');
  // console.log(dryfruitsProducts);
  return (
    <div className='grid grid-cols-4 product pl-4 bg-yellow-100 py-2 gap-[20px] mx-auto w-[98%]  my-5 '>
     {dryfruitsProducts && dryfruitsProducts.map((items,index)=>{
      return(
        <Card data={{title:items.title,price:items.price.cost}}/>
      )
     })}
    </div>
  )
}

export default Dryfruits