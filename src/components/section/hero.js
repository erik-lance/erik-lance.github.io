import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
	height: 600px;
	width: 100%;
	/*border: 4px solid var(--black);*/
	display: flex;
	align-items: center;

	#hero-card {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.hero-text {
		margin: 0px;
	}

	.hero-text:nth-child(1) {
		font-size: 15px;
		color: var(--dark-green);
	}

	.hero-text:nth-child(2) {
		font-weight: 700;
		font-size: 48px;
		color: var(--orange);
	}

	.hero-text:nth-child(3) {
		font-size: 48px;
		color: var(--dark-gray2);
	}

	.hero-text:nth-child(4) {
		font-size: 15px;
		color: var(--dark-gray2);
	}
`;

const Hero = () => {
	return (
		<StyledHeroSection>
			<div id="hero-card">
				<p className="hero-text">Hello! I am ...</p>
				<p className="hero-text">Erik Lance Tiongquico.</p>
				<p className="hero-text">I love technology!</p>
				<p className="hero-text">
					I'm a student at De La Salle University and I join game jams
					when I can at&nbsp;
					<a href="https://maplepoki.itch.io/" target="_blank">
						maplepoki.itch.io.
					</a>
				</p>
			</div>
		</StyledHeroSection>
	);
};

export default Hero;
