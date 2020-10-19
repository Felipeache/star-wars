//Creation des trois butons de recherche
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarColor02">
                      <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                  <a className="nav-link" > <Link to="/index">Home</Link>  <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link"> <Link to="/personnages">Personnages</Link>   </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link"> <Link to="/starships">Starships</Link>     </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link"> <Link to="/planetes">Planètes</Link>  </a>
                                </li>
                        </ul>
                      </div>
                    </nav>
            </div>
    );   
}