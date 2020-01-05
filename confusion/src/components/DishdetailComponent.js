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
  Form,
  Row,
  Label,
  Col
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Link} from 'react-router-dom';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

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
        <ModalHeader>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm>
            <Row className="form-group">
              <Label htmlFor="rating" md={2}>Rating</Label>
              <Col md={10}>
                <Control.select model=".rating"
                  id="rating"
                  name="rating"
                  className="form-control"
                 >
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 <option>4</option>
                 <option>5</option>
               </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="author" md={2}>Your Name</Label>
              <Col md={10}>
                <Control.text model=".author"
                  id="author"
                  name="author"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    minLength: minLength(3), maxLength: maxLength(15)
                  }}
                 />
               <Errors
                 className="text-danger"
                 model=".author"
                 show="touched"
                 messages={{
                   minLength: 'Must be greater than 2 characters',
                   maxLength: 'Must be 15 characters or less'
                 }}
                 />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment" md={2}>Comment</Label>
              <Col md={10}>
                <Control.textarea model=".comment"
                  id="comment"
                  name="comment"
                  rows="6"
                  className="form-control" />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{size: 10, offset: 2}}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
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
