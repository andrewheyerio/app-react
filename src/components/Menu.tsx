import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <NavLink to={'/users'} className="nav-link" aria-current="page">
                                    Users
                                </NavLink>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Menu;