import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderDish(this.props.selectedDish)}
      </div>
    )
  }

}

    export default Dishdetail;
