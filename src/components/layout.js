import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '@styles'

const StyledContent = styled.div`
    display: flex;
`;

const Layout = ({children}) => {
    return (
        <StyledContent>
            <GlobalStyle />
            {children}
        </StyledContent>

    );
}

export default Layout;