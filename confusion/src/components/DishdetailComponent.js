import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Dishdetail extends Component {

  componentDidMount() {
    console.log('Dishdetail component componentDidMount is invoked');
  }

  componentDidUpdate() {
    console.log('Dishdetail component componentDidUpdate is invoked');
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  renderComments(comments) {
    if (comments != null) {

      const commentsHTML = comments.map((comment) => {
        return (
          <ul key={comment.id} className="list-unstyled">
            <li className="mt-3">{comment.comment}</li>
            <li className="mt-3">-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
          </ul>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {commentsHTML}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      );
    }
  }

}

    export default Dishdetail;
