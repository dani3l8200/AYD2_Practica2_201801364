import React from 'react'

import "../styles/register.css";
import RegisterCard from "../components/RegisterCard.component";

const Register = () => {
    return (
        <div className="register:register-div">   
            <div className="register:card">
                <RegisterCard />
            </div>     
        </div>
    )
}

export default Register
