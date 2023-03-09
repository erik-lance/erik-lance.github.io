import React from 'react'
import styled from 'styled-components'

const StyledContactSection = styled.section`
    font-family: 'InterRegular';
    background-color: var(--green);
    text-align: center;

    margin-bottom: 200px;
`;

const Contact = () => {
    return (
        <StyledContactSection>
            <h1>Contact</h1>
            <p>Erik Test</p>
            <a href="mailto:eriklance@gmail.com" target="_blank">Leave an email!</a>
        </StyledContactSection>
    )
}

export default Contact;