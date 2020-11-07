/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata : {
    title:'G-Project',
    description:'the land of Gatsby',
    author:'George Nikoglou',
    data:['item1','item2'],
    person: {name:'George' , age:40},
  },
  plugins: [

    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },

    
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },


  ],
}
