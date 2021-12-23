import React from "react";
import './email.css';
export default function Email() {
    return (
        <div className="container">
            <div className="body">
                <div className="header">
                    <img src='new' alt='logo'/>
                    <span>Formsack</span>
                </div>
                <div className='content'>
                    <h4>Hey there Vikas</h4>
                    <p>To confirm your email address, please click on the button </p>
                    <a href='new'>Confirm my account</a>
                </div>
            </div>
        </div>
    )
}