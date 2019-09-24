import React from 'react';
import { NavLink } from 'react-router-dom';

const landing = () => {

    return (
            <div className='landingDiv'>
                <div className="landingTitle">
                <h1>Streemly</h1>
                </div>
                <div className='landingText'>
                    <p><span>Streemly</span> is the best way to manage HR requests and eliminate organization latency.</p>
                </div>
                <div className='landingButtons'>
                    <button className="aBtn"><NavLink to='login'>Signup</NavLink></button>
                    <button className="aBtn">Login</button>
                </div>
            </div>
    )       
}

export default landing;