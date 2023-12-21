import React, { useEffect, useRef, useState } from 'react'
import Aside from './dashboardComponents/aside'
import axios from 'axios'
import BASE_BACKEND_URL from '../secret'



const AddProducts = () => {
    const [productId, setProductId] = useState('')
    const [title, setTitle] = useState('')
    const [mrp, setMrp] = useState('')
    const [cost, setCost] = useState('')
    const [discount, setDiscount] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const handleform = (e) => {
        e.preventDefault()
        console.log(image);
        if (!image) {
            console.log('image is not choosen');
            return
        }
        const fd = new FormData()
        fd.append('file', image)
        fd.append('productId', productId)
        fd.append('title', title)
        fd.append('mrp', mrp)
        fd.append('cost', cost)
        fd.append('discount', discount)
        fd.append('category', category)
        fd.append('description', description)
        axios.post(`${BASE_BACKEND_URL}/api/v1/product/addproduct`, fd)
        setProductId('')
        setTitle('')
        setCost('')
        setMrp('')
        setImage('')
        setDescription('')
        setCategory('')
        setDiscount('')

    }


    return (
        <div className='bg-slate-100'>
            <div className='flex gap-[2px] mobile-device'>
                <Aside />
                {/* <form onSubmit={handleform}>
                    <input

                        type="file"
                        onChange={(e) => {
                            setImage(e.target.files[0])
                        }}
                        className="file-input file-input-bordered file-input-warning file-input-sm my-1 w-full max-w-xs"
                        placeholder="Image of the Product" />
                        <button type='submit' className='btn -btn-sm btn-warning'>submit</button>
                </form> */}
                <form onSubmit={handleform} className='p-6 mx-[150px] add-product-form rounded-lg h-1/2 bg-green-200 my-6' >
                    <div className="flex gap-8   container items-center">
                        <div className="form-control">
                            <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Product Id
                                </span>
                                <input
                                    required
                                    value={productId}
                                    onChange={(e) => setProductId(e.target.value)}
                                    type="text"
                                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 block w-64 rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Id of the Product" />
                            </label>
                        </div>
                        <div className="form-control py-2">
                            <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Title
                                </span>
                                <input
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    type="text"

                                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 block w-64 rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Name of the Product" />
                            </label>
                        </div>



                    </div>
                    <div className="flex gap-8   container items-center">
                        <div className="form-control py-2">
                            <label class="block">
                                <span
                                    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    MRP
                                </span>
                                <input
                                    required
                                    onChange={(e) => setMrp(e.target.value)}
                                    value={mrp}
                                    type="txt"

                                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 block w-64 rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Maximum Price of the Product" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label class="block">
                                <span
                                    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Cost
                                </span>
                                <input
                                    required
                                    onChange={(e) => setCost(e.target.value)}
                                    value={cost}
                                    type="text"

                                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 block w-64 rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Selling Price of the Product" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-8  container items-center">
                        <div className="form-control py-2">
                            <label class="block">
                                <span class=" block text-sm font-medium text-slate-700">
                                    Discount
                                </span>
                                <input
                                    onChange={(e) => setDiscount(e.target.value)}
                                    value={discount}
                                    type="text"

                                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 block w-64 rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Any Discount of the Product" />
                            </label>
                        </div>
                        <div className="form-control">

                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Category</span>

                                </div>
                                <select onChange={(e) => setCategory(e.target.value)} className="select select-sm w-64 select-bordered">
                                    <option disabled selected>Choose Category</option>
                                    <option>Dal</option>
                                    <option>Spices</option>
                                    <option>Namkeen</option>
                                    <option>Dry Fruits</option>
                                    <option>Biscuit</option>
                                    <option>Eadable Oil</option>
                                </select>

                            </label>


                        </div>
                    </div>
                    <div className="flex gap-8 container  items-center">
                        <div className="form-control py-2">
                            <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Image
                                </span>
                                <input
                                    required
                                    type="file"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className="file-input file-input-bordered file-input-warning file-input-sm my-1 w-64 max-w-xs"
                                    placeholder="Image of the Product" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Description
                                </span>
                                <input
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    type="text"

                                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 block w-64 rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Brief description of the Product" />
                            </label>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='btn  btn-md bg-yellow-300 hover:bg-slate-800  hover:text-white'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProducts