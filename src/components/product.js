import { CartContext } from '../context/CartContext'
import { Card, Button } from "react-bootstrap";
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './product.css'


export default function Product(props) {

  let { title, Description, price, image, cat, id } = props;
  let dataFromCartContext = useContext(CartContext)

  return (

    title && (
      <Card id="card">

        <Card.Img id='prodimg'
          src={`https://picsum.photos/640/480?random=${id}`}
          alt='Error_404 not found'
        />

        <Card.Body className='cardbody'>

          <div className='cardtext'>
            <Card.Title>{id ? title : "No Title"}</Card.Title>
            <Card.Text>{id ? Description : "No Description Available"}</Card.Text>
          </div>

          <div className='btns'>

            <div className='cat'>{id ? cat : "unavailable"}</div>
            <div className='d-flex buyprice'>
              <div>
                <Button className='prodbtn' variant={title ? "" : "disabled"}>
                  <Link id='prodbtn' to={`/shop/${id}`}> {title ? "See More" : "Out of Stock"} </Link>
                </Button>
                <Button className='prodbtn' variant={title ? "" : "disabled"} onClick={dataFromCartContext.increasecart}>
                  {title ? "Add" : "Out of Stock"}
                </Button>
              </div>
              <Card.Text>{price}$  <span className='oldprice'>${price * 2}</span></Card.Text>
            </div>
          </div>

        </Card.Body>
      </Card >
    )
  );
}