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
        <Link to={'/dal'}> <ContainerCard data={{title:'Dal',img_src:'https://www.grainculture.store/uploads/edible-smart/products/toor-dal-min-scaled-740285_m.jpg'}} /></Link>

        <Link to={'/rice'}> <ContainerCard data={{title:'Rice',img_src:'https://static.vecteezy.com/system/resources/previews/000/419/181/non_2x/rice-poster-vector.jpg'}} /></Link>

        <Link to={'/biscuit'}> <ContainerCard data={{title:'Biscuits',img_src:'https://th.bing.com/th/id/OIP.s7E4TKp8G2Xm_c1aXieFyQHaHa?w=188&h=187&c=7&r=0&o=5&dpr=1.2&pid=1.7'}} /></Link>

        <Link to={'/namkeen'}> <ContainerCard data={{title:'Namkeen',img_src:'https://i.pinimg.com/736x/17/76/0b/17760bc5a2cfd2f5b0a51ab57e47e71b.jpg'}} /></Link>

        <Link to={'/dryfruits'}> <ContainerCard data={{title:'DryFruits',img_src:'https://th.bing.com/th/id/OIP.hMty7vX39xPKydZJXCZVEQAAAA?w=420&h=420&rs=1&pid=ImgDetMain'}} /></Link>

        <Link to={'/eadableoil'}> <ContainerCard data={{title:'Eadable Oil',img_src:'https://th.bing.com/th/id/OIP.Juw6fVAzJd8nfNq29S8XmQAAAA?rs=1&pid=ImgDetMain'}} /></Link>
        

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