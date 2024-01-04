import React from 'react'

const ContainerCard = ({data}) => {
    const {title,img_src} = data
  
    return (
        <div className=" rounded card w-32  h-36 shadow-xl">
            <figure><img src={`${img_src}`} alt="Shoes" className='h-28 rounded-full w-28'/></figure>
            <div className="p-1">
                <h2 className="font-semibold text-center">{title}</h2>
            </div>
        </div>
    )
}

export default ContainerCard