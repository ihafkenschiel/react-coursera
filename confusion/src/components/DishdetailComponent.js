import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    if (comments != null) {

      const commentsHTML = comments.map((comment) => {
        return (
          <ul key={comment.id} className="list-unstyled">
            <li className="mt-3">{comment.comment}</li>
            <li className="mt-3">-- {comment.author},
              {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
          </ul>
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
      <div className="container">
        {this.renderDish(this.props.selectedDish)}
      </div>
    )
  }

}

    export default Dishdetail;
