import React, { useContext } from 'react'
import Aside from './dashboardComponents/aside'
import UserContext from '../Context/context.js'



const Products = () => {
  const { products, deleteProduct } = useContext(UserContext)


  return (
    <>
    
      <div className='flex gap-[2px]  mobile-device'>
        <Aside />
        <div className='w-[80%] product-page-container  bg-yellow-100 my-[2px] rounded p-2'>
          <div className="bg-green-200 overflow-y-auto h-screen ">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Desciption</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {products && products.map((products, index) => {
                  return (
                    <tr id={index}>
                      <th>{products.id}</th>
                      {/* <td>{products.image.URL}</td> */}
                      <td><img className='w-16 h-16' src={`${products.image.URL}`} alt="" /></td>
                      <td>{products.title}</td>
                      <td>{products.description}</td>
                      <td>{products.price.cost}</td>
                      <td>{products.category}</td>
                      <div className="flex gap-2  py-4 my-4">
                        <button
                          className='btn bg-red-500 text-white btn-sm'
                          onClick={() => deleteProduct(products.id)} >Delete</button>
                        <button
                          className='btn btn-sm'
                          >Update</button>
                      </div>
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  )
}

export default Products