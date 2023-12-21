import React from 'react'

const ContainerCard = ({title}) => {
  
    return (
        <div className=" rounded card w-32  h-36 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className='h-28 rounded-full w-28'/></figure>
            <div className="p-1">
                <h2 className="font-semibold text-center">{title}</h2>
            </div>
        </div>
    )
}

export default ContainerCard