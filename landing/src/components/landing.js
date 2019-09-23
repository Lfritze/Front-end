import React from 'react';
import styled from 'styled-components';

const landingDiv = styled.div`
    
`

const landingTitle = styled.div`
    color: red;
`

const landingText = styled.div`

`

const landingButtons = styled.div`

`



const landing = () => {

    return (
        <landingDiv>
            <landingTitle>
                <h1>Streemly</h1>
            </landingTitle>
            <landingText>
                <p><span>Streemly</span> is the best way to manage hr requests and eliminate organizational lantency</p>
            </landingText>
            <landingButtons>
                <button className="aBtn">Signup</button>
                <button className="aBtn">Login</button>
            </landingButtons>
        </landingDiv>
    )
}

export default landing;