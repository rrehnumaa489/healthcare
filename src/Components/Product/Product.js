import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { name, description,image} = product;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
            <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              {description}
          </Card.Text>
          <Link to={`/more/${name}`}><Button variant="primary">Details</Button></Link>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Product;