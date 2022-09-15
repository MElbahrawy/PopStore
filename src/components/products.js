import React, { useEffect, useState, useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import Product from './product'
import axios from 'axios'
import './products.css'

export default function Products() {

  let dataFromContext = useContext(CounterContext)
  let page = dataFromContext.counter * 20

  useEffect(() => {
    console.log("mounted");
    getProducts();
  }, [page])


  let getProducts = async () => {
    let response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=20`)
    setProducts(response.data)
  };
  let [Products, setProducts] = useState([])


  return (
    <>
      <div id='products' className="">

        {Products.map((product) => (
          <Product
            title={product.title}
            Description={product.description}
            price={product.price}
            key={product.id}
            image={product.images[1]}
            cat={product.category?.name}
            id={product.id}
          />
        ))}

      </div>
    </>
  );
}
