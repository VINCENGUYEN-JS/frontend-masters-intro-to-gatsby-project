import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
  query CockTailImageQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <>
      <Layout
        title="About This site"
        description="More infomartion about this site"
      >
        <GatsbyImage
          image={getImage(data.file)}
          alt="a cock tail set inside an elaborate arragement with dry ice"
        />
        <h1>AboutPage</h1>
        <Link to="/">Back to home</Link>
      </Layout>
    </>
  );
}
