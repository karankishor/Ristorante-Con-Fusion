import React from "react";
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import Menu from './MenuComponent';
import { useParams, useNavigate } from "react-router-dom";



function DisplayDish() {
    const { dishId } = useParams();
  return (
    <div className="container">
       <img width="100%" src={DISHES[dishId].image} alt={DISHES[dishId].name} />
      <h1>{DISHES[dishId].name}</h1>{" "}
      <p>{DISHES[dishId].description}</p>{" "}
    </div>
  
  );
}

export default DisplayDish;