import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
  return (
<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><NavLink exact to="#">Home Delivery</NavLink></li>
                            <li><NavLink exact to="#">Premium Membership</NavLink></li>
                            <li><NavLink exact to="#">Fast Service</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><NavLink exact to="/about">FoodHub</NavLink></li>
                            <li><NavLink exact to="#">foodhub@gmail.com</NavLink></li>
                            <li><NavLink exact to="#">Amritsar, Punjab</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>FoodHub</h3>
                        <p>FoodHub is a restaurant brand that provides high quality veg & non-veg food.
It's a newly started brand that serves North Indian, Italian and Chinese cuisine. 
Inviting franchise investors to start our brand of restaurants and cloud kitchen in their
city</p>
                    </div>
                   
                </div>
                <p className="copyright">FoodHub © 2023</p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
