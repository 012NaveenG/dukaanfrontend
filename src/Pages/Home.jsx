import React, { useContext, useEffect } from 'react'
import ContainerCard from '../components/ContainerCard.jsx'
import Crousel from '../components/Crousel.jsx'
import Card from '../components/Card.jsx'
import UserContext from '../Context/context.js'
import { Link } from 'react-router-dom'


const Home = () => {
  const { products } = useContext(UserContext)
  //   console.log(products.title);
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location = '/login'
    }
  })
  return (
    <div>
      <div className=" w-[98%] container-card rounded flex justify-between h-40 p-2 mx-auto bg-gray-100 my-1 ">
        <Link to={'/dal'}> <ContainerCard title={'Dal'} /></Link>
        <Link to={'/spices'}> <ContainerCard title={'Spices'} /></Link>
        <Link to={'/rice'}> <ContainerCard title={'Rice'} /></Link>
        <Link to={'/biscuit'}> <ContainerCard title={'Biscuits'} /></Link>
        <Link to={'/eadableoil'}> <ContainerCard title={'Eadable Oil'} /></Link>
        <Link to={'/namkeen'}> <ContainerCard title={'Namkeen'} /></Link>
        <Link to={'/dryfruits'}><ContainerCard title={'Dry Fruits'} /></Link>

      </div>
      <Crousel />
      <div className="w-[98%] p-1 px-5 mx-auto  bg-yellow-100">
        <div className='grid grid-cols-4 product gap-2'>
          {products && products.map((items, index) => {
            // console.log(items);
            return (
              <Card data={{ title: items.title, price: items.price.cost, image: items.image.URL }} />
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Home