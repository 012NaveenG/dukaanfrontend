import React from 'react'

const Card = ({ data}) => {
    const {title,price,image} =data
    return (
        <div className="rounded overflow-hidden  product p-2 bg-base-100 shadow-xl ">
            <figure><img className='w-32 h-36 items-center mx-auto my-1' src={`${image}`} alt="Shoes" /></figure>
            <div className="py-2 px-1 relative bg-green-200  h-[120px]">
                <div className="flex justify-between  items-center">
                    <h2 className="font-semibold w-[95%]  my-2">{title}</h2>
                    <h3 className='text-white bg-yellow-600 w-16 text-center rounded'>&#x20B9;
                        {price}</h3>
                </div>
                <button className="btn btn-sm absolute bottom-[10px] btn-primary">Buy Now</button>
            </div>
        </div>
    )
}

export default Card