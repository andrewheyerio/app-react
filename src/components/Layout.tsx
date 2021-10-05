import React, {useEffect, useState} from 'react';
import Menu from "./Menu"
import axios from "axios"
import {Redirect} from "react-router-dom";
import Nav from "./Nav";


const Layout = (props: any) => {

    // This wrap will check to see if the user is authenticated, it does this by trying to access the user API
    // if that API returns false it redirects the user to the login page. When doing a GET to the user API it will send
    // the jwt cookie that we receive when logging in. This cookie is sent in every axios request based on the app.tsx
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState( null);

    useEffect(() => {
        (
            async () => {
                try {
                    const {data} = await axios.get('user');
                    console.log(data);

                    setUser(data)
                } catch (e) {
                    setRedirect(true);
                }
            }
        )()
    }, []);
    if (redirect) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <Nav user={user}/>

            <div className="container-fluid">
                <div className="row">

                    <Menu/>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="table-responsive">
                            {props.children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;