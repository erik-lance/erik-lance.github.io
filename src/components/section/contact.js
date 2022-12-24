import React from 'react'
import styled from 'styled-components'

const StyledContactSection = styled.section`
    font-family: 'InterRegular';
    background-color: var(--green);
    text-align: center;
`;

const Contact = () => {
    return (
        <StyledContactSection>
            <h1>Contact</h1>
            <p>Erik Test</p>
        </StyledContactSection>
    )
}

export default Contact;