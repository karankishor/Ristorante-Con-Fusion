import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import {Routes, Route, Navigate} from 'react-router-dom';
import DisplayDish from './DisplayDish';



class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }


  render() {
    return (
      <div>
       <Header/>
     <Routes>
       <Route path="/home" index element={<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
       promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
       leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>}/>
       <Route exact path="/menu" element={<Menu dishes={this.state.dishes}/>}/>
       <Route path="/menu/:dishId" element={<DisplayDish/>}/>
       <Route exact path="/contactus" element={<Contact/>}/>
       <Route exact path="/aboutus" element={<About  leaders={this.state.leaders}/>}/>
       <Route path="/home" element={ <Navigate to="/home" /> }/>
     </Routes>
      <Footer/>
      </div>
    );
  }
}


export default Main;
