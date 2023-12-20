import React, { useEffect, useState, useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import Product from "./product";
import axios from "axios";
import "./products.css";

export default function Products() {
  let dataFromContext = useContext(CounterContext);
  let page = dataFromContext.counter * 5;

  useEffect(() => {
    getProducts();
  }, [page]);

  let getProducts = async () => {
    let response = await axios.get(
      `https://dummyjson.com/products?limit=5&skip=${page}`
    );
    setProducts(response.data.products);
  };
  let [Products, setProducts] = useState([]);
  console.log(Products);

  return (
    <>
      <div
        id="products"
        className="container d-flex justify-content-center flex-wrap"
      >
        {Products.map((product) => (
          <Product
            title={product.title}
            price={product.price}
            key={product.id}
            image={product.images[1]}
            cat={product.category}
            id={product.id}
            stock={product.stock}
          />
        ))}
      </div>
    </>
  );
}
