import { Link} from "react-router-dom";
import React from 'react';

const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link to = "/" className="navbar-brand" href="#"><strong>Accueil</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
                            <li className="nav-item">
                            <Link to ="/afficherEvenement" className="nav-link" aria-current="page">Evenements</Link>
                            </li>
                            <li className="nav-item">
                            <Link to ="/CreerEvenement" className="nav-link" aria-current="page">Creer un evenement</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;