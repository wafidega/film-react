import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class CardMovie extends Component {
  handleSetUpdate = () => {
    this.props.handleUpdate();
  };
  render() {
    const { id, name, genre, image } = this.props.data;
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={
              image
                ? `http://localhost:3001/uploads/movie/${image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{genre}</Card.Text>
            <Button variant="primary" onClick={() => this.props.handleDetail(id)}>
              Coba
            </Button>
            <Button variant="primary" onClick={() => this.props.handleSetUpdate}>
              Coba
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CardMovie;
