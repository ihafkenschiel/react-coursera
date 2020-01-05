import React, { Component, useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form
} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDish({dish}) {
  return (<div>
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name}/>
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  </div>);
}

function RenderComments({comments}) {
  if (comments != null) {

    return (<div>
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {
          comments.map((comment) => {
            return (<li key={comment.id}>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {
                  new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                  }).format(new Date(Date.parse(comment.date)))
                }</p>
            </li>);
          })
        }
      </ul>
      <CommentForm />
    </div>);

  } else {
    return (<div></div>);
  }
}

const CommentForm = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline onClick={toggle}>
        <span className="fa fa-pencil fa-lg"></span> Submit Comment
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <Form>
            <Button type="submit" value="submit" color="primary">Login</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}


const DishDetail = (props) => {

  if (props.dish != null) {
    return (<div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active="active">{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments}/>
        </div>
      </div>
    </div>);
  } else {
    return (<div></div>);
  }
}

export default DishDetail;
