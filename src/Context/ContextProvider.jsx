import React, { useEffect, useState } from 'react'
import UserContext from './context.js'
import axios from 'axios'
import BASE_BACKEND_URL from '../secret.js'


const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState('')
  const [allusers, setallusers] = useState(null)
  const [products, setProducts] = useState(null)
  const [CurrentUser, setCurrentUser] = useState(null)
  const fetchProduct = async () => {
    try {
      // Make a GET request to the server
      const response = await axios.get(`${BASE_BACKEND_URL}/api/v1/product/allproduct`)

      // Update the state with the response data
      setProducts(response.data.allProducts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      // Update the state by removing the deleted product
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
      await axios.delete(`${BASE_BACKEND_URL}/api/v1/product/deleteproduct`, {
        data: { id: productId }
      })
      fetchProduct()

    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    // Call the fetchData function
    fetchProduct();
  }, []); // Empty dependency array, so it runs only once during component mount

  useEffect(() => {
    axios.get(`${BASE_BACKEND_URL}/api/user/allusers`)
      .then(response => {
        const responseData = response.data;
        setallusers(responseData)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  })

  // console.log(dal);
  // console.log(CurrentUser);
 

  return (
    <UserContext.Provider value={{ token, setToken, allusers, products, setProducts, deleteProduct ,CurrentUser,setCurrentUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
