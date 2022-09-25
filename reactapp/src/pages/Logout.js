import React from "react";
import Login from "./Login";

const Logout = () => {

    sessionStorage.clear();
    window.location.reload();
    return (
        <Login />
    )
}

export default Logout;
