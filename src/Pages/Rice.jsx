import React, { useContext } from 'react'
import Card from '../components/Card'
import UserContext from '../Context/context'

const Rice = () => {
    const { products } = useContext(UserContext)
    const riceProducts = products && products.filter(product => product.category === 'Rice')
    return (
        <div className='grid grid-cols-4 product pl-4 bg-yellow-100 py-2 gap-[20px] mx-auto w-[98%]  my-5 '>
            {riceProducts && riceProducts.map((items, index) => {
                return (
                    <Card id={index} data={{ title: items.title, price: items.price.cost, image: items.image.URL }} />
                )
            })}
        </div>

    )
}

export default Rice