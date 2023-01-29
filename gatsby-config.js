module.exports = {
  siteMetadata: {
    siteUrl: 'https://vincenguyen.com',
    title: 'Intro to Gatsby',
    description: 'Intro to Gatsby',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    //load posts -> to pages ( default of gatsby is files in pages)
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    //turn them into pages
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    //turn mdx into content
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
  ],
};
