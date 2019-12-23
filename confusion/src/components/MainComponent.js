import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary" expand="md">
          <NavbarBrand target="_blank" href="https://www.coursera.org/learn/front-end-react/supplement/HXLrI/introduction-to-react-additional-resources">Ristorante Con Fusion</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink target="_blank" href="https://reactstrap.github.io/components/navbar/">Reactstrap</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Empty Link</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
