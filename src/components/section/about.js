import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image';

const StyledAboutSection = styled.section`
`;

const StyledImg = styled.div`
    max-width: 300px;
`;

const About = () => {
    return(
        <StyledAboutSection>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <StyledImg>
                <StaticImage>
                    src="../../img/erik.jpg"
                </StaticImage>
            </StyledImg>
        </StyledAboutSection>
    )
};

export default About;