import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '@styles'

const StyledContent = styled.div`
    display: flex;

    #layout-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0px 200px;
    }
`;

const Layout = ({children}) => {
    return (
        <StyledContent>
            <GlobalStyle />
            
            <div id='layout-content'>
                {children}
            </div>
        </StyledContent>

    );
}

export default Layout;