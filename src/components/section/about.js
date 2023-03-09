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
                Howdy! I'm Erik Lance Tiongquico, a student at De La Salle University and a
                Microsoft Learn Student Ambassador. I have always been programming since I was 10 years old
                and love exploring new technologies. I'm currently learning React and Gatsby (this site was a product of it!).

            </p>

            <StyledImg>
                <StaticImage
                    src="../../images/erik.jpg"
                    alt="Erik Lance Tiongquico"
                    width={300}
                    height={300}
                />
            </StyledImg>
        </StyledAboutSection>
    )
};

export default About;