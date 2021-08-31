import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  return (
    <div className="products">
      <Card style={{ width: "18rem" }}>
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
          <Button disabled={!product.inStock} variant="primary">
            {product.inStock ? "Add To Cart" : "Out Of Stock"}
          </Button>
          <Button variant="danger">Remove from Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
