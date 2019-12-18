import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderComments(comments) {
    if (comments != null) {

      const commentsHTML = comments.map((comment) => {
        return (
          <div key={comment.id} className="list-unstyled">
            <div className="mt-3">{comment.comment}</div>
            <div className="mt-3">-- {comment.author}, {comment.date}</div>
          </div>
        );
      });

      return (
        <div>{commentsHTML}</div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {this.renderComments(dish.comments)}
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
