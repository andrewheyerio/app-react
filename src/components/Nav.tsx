import React from 'react';
import {User} from "../models/user";
import {Link} from 'react-router-dom';
import axios from "axios";

// The user object can either be a user type, or null. This allows us to set the user to Null in other areas of our
// application. If we don't set the "| null"
const Nav = (props: { user: User | null }) => {

    const logout = async () => {
        await axios.post('logout');
    }

    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>

                <ul>
                    <Link to={'/profile'}
                       className="p-2 text-white text-decoration-none">{props.user?.first_name} {props.user?.last_name}</Link>
                    <Link to={'/login'} href="#" className="p-2 text-white text-decoration-none" onClick={logout}>Sign out</Link>
                </ul>
            </header>
        </div>
    );
};

export default Nav;