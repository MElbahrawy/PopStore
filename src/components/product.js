import { CartContext } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./product.css";

export default function Product(props) {
  let { title, stock, price, image, cat, id } = props;
  let dataFromCartContext = useContext(CartContext);

  return (
    title && (
      <Card id="card">
        <Card.Img
          id="prodimg"
          src={
            image
              ? image
              : "https://via.placeholder.com/500/ddd/000?text=No Preview"
          }
          alt="Error_404 not found"
        />

        <Card.Body className="cardbody d-flex flex-column justify-content-between">
          <div className="cardtext">
            <div className="cat">{id ? cat : "unavailable"}</div>
            <Card.Title>{id ? title : "No Title"}</Card.Title>
          </div>
          <Card.Text>
            {price}$ <span className="oldprice">${price * 2}</span>
          </Card.Text>
          <div className="btns">
            <div className="d-flex  align-items-center justify-content-between">
              <div>
                <Button
                  className="prodbtn btn"
                  variant={title ? "" : "disabled"}
                >
                  <Link id="prodbtn" to={`/shop/${id}`}>
                    {stock ? "See More" : "Out of Stock"}
                  </Link>
                </Button>
                <Button
                  className="prodbtn"
                  variant={title ? "" : "disabled"}
                  onClick={dataFromCartContext.increasecart}
                >
                  {title ? "Add" : "Out of Stock"}
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  );
}
