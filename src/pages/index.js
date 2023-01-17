import * as React from 'react';
import { Layout, Hero, About, Experience, Contact } from '@components';

const IndexPage = () => {
	return (
    <Layout>
			<h1>Welcome to my Gatsby site!</h1>
      <Hero />
      <About />
      <Experience />
      <Contact />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Test Page</title>;
