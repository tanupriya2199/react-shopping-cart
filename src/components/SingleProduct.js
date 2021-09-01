import React from "react";
import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div> Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === product.id) ? (
            <Button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
              variant="danger"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
              disabled={!product.inStock}
              variant="primary"
            >
              {product.inStock ? "Add To Cart" : "Out Of Stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
