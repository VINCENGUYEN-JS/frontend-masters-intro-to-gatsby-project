import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <>
      <Layout
        title="About This site"
        description="More infomartion about this site"
      >
        <h1>AboutPage</h1>
        <Link to="/">Back to home</Link>
      </Layout>
    </>
  );
}
