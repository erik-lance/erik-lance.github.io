import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
	height: 600px;
	width: 100%;
	border: 4px solid var(--black);
	padding: 10px 100px;
    display: flex;
    align-items: center;    

    #hero-card {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .hero-text {
        margin:0px;
    }

    .hero-text:nth-child(1) {
        font-size: 15px;
        color: var(--gray);
    }

    .hero-text:nth-child(2) {
        font-weight: 700;
        font-size: 48px;
    }

    .hero-text:nth-child(3) {
        font-size: 48px;
        color: var(--dark-gray);
    }
`;

const Hero = () => {
	return (
		<StyledHeroSection>
            <div id='hero-card'>
                <p className='hero-text'>Hello! I am</p>
                <p className='hero-text'>Erik Lance Tiongquico</p>
                <p className='hero-text'>I'm a Lorem Ipsum but also dolor sit amet</p>
            </div>
		</StyledHeroSection>
	);
};

export default Hero;
