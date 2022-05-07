import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardDeck, } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seletedDish: null
    }
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg  width="100%" top src={dish.image} alt={dish.name} />
          < CardBody>
            <CardTitle >{dish.name}</CardTitle>
            <CardText >{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  render() {

    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className=" col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            < CardImgOverlay>
              <CardTitle >{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    // const menu = this.state.dishes.map((dish) => {
    //   return (
    //     <Media className='row  offset-1'>
    //       <Media className='col-2 my-5' left >
    //         <Media object src={dish.image} alt={dish.name} />
    //       </Media>
    //       <Media  className="col-8 my-5" body>
    //         <Media heading>
    //           {dish.name}
    //         </Media>
    //         <p>{dish.description}</p>
    //       </Media>
    //     </Media>
    //   );
    // });

    return (
      <div className="container">

        <div className='row'>
          {menu}
        </div>
        <div className="row">
            {this.renderDish(this.state.selectedDish)}
        </div>
      </div>

    );
  }
}

export default Menu;