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

      const comments = dish.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <div>{comment.comment}</div>
            <div>-- {comment.author}, {comment.date}</div>
          </div>
        );
      });


      return (
        <div className="row">
          <Card className="col-12 col-md-6">
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          <div className="col-12 col-md-6">
            <h1>Comments</h1>
            {comments}
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderDish(this.props.selectedDish)}
      </div>
    )
  }

}

    export default Dishdetail;
