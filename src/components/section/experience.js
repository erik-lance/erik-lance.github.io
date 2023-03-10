import React from 'react';
import styled from 'styled-components';

const StyledExperienceSection = styled.section`
	padding: 0px 100px;

	h3 {
		margin: 2px 0px;
	}

	ul {
		margin: 4px 0px;
	}
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

const Experience = () => {
	return (
		<StyledExperienceSection>
			<StyledHeader>
				<h1 class="component-header">Experience</h1>
			</StyledHeader>
			<p>
				<h3>Microsoft Learn Student Ambassador (MLSA)</h3>
				<ul>
					<li>Project Management</li>
					<li>Public Speaking</li>
				</ul>
				<h3>Research Assistant</h3>
				<ul>
					<li>Research</li>
					<li>Human Computer Interactions</li>
				</ul>
				<h3>Vice President and MLSA Representative</h3>
				<ul>
					<li>Project Management</li>
					<li>Public Speaking</li>
				</ul>
			</p>
		</StyledExperienceSection>
	);
};

export default Experience;
