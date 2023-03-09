import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledAboutSection = styled.section`
	display: flex;
	flex-direction: column;
	padding: 0px 100px;
`;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40%;


	h1 {
		margin-right: 20px; /* Add some margin to the right of the header element */
	}

	/* Creates a line to the right */
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--black);
        margin-top: 10px;
    }

`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledText = styled.div`
	display: flex;
	flex-direction: column;

	p {
		text-align: justify;
	}
`;

const StyledImg = styled.div`
	width: 800px;
	margin: 20px;
`;

const About = () => {
	return (
		<StyledAboutSection>
			<StyledHeader>
				<h1>About</h1>
			</StyledHeader>
			<StyledContent>
				<StyledText>
					<p>
						Howdy! I'm Erik Lance Tiongquico, a student at De La
						Salle University and a&nbsp;
						<a
							href="https://studentambassadors.microsoft.com/en-US/profile/154120"
							target="_blank"
						>
							Microsoft Learn Student Ambassador.
						</a>
						&nbsp;I have always been programming since I was 10
						years old and love exploring new technologies. I'm
						currently learning React and Gatsby (this site was a
						product of it!).
					</p>
					<p>
						These days I enjoy developing games and web apps as
						personal projects. You should check out my&nbsp;
						<a href="https://maplepoki.itch.io/" target="_blank">
							itch page!
						</a>
						&nbsp; That page is filled with games I developed. All
						the assets are mine too. From art, to music, to code, I
						did it all!
					</p>
					<p>
						I am also currently working as a research assistant at
						the Center for Human-Computing Innovations (CeHCI) under
						the Advanced Research Institute for Informatics,
						Computing and Networking (AdRIC) which is the research
						unit of the College of Computer Studies (CCS) of De La
						Salle University.
					</p>
				</StyledText>
				<StyledImg>
					<StaticImage
						src="../../images/erik.jpg"
						alt="Erik Lance Tiongquico"
					/>
				</StyledImg>
			</StyledContent>
		</StyledAboutSection>
	);
};

export default About;
