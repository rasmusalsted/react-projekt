import "../../css/Navigation.css"
import React from "react";
import { Link } from "react-router-dom";
import logoFinal from "../../assets/images/logo-final.png"
import nav from "../../assets/images/nav-1.png"
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"


const Navigation = () => {

    return (
        <nav className="navigation">

            <div className="home">
                <Link to="/"><img className="logo" src={logoFinal}/></Link>
            </div>

            <div className="navigate">
                <Link to="/whatWeDo"><img src={nav}/></Link>
                <Link to="/Maintainable"><img src={nav2}/></Link>
                <Link to="/GetInTouch"><img src={nav3}/></Link>
            </div>

        </nav>
    );
}

export default Navigation;