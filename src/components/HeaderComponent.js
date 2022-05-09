import React,{Component} from "react";
import { Navbar, NavbarBrand, } from 'reactstrap';


class Header extends Component{ 
   
    render(){
       return(
           <>
            <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <div className="jumbotron">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inpiration from the World's Best cuisesnes, and create a uniquie fusion experience. Our lispmaking creatiions will tickle your culinary senses! </p>
                        </div> 
                    </div>
                </div>
                </div>
           </>
       ); 
    }
}
export default Header;