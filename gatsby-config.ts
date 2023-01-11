module.exports = {
    siteMetadata: {
        title: `BOOM! THE development marketplace`,
        description: ``,
        author: `@gatsbyjs`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blogs`,
                path: `${__dirname}/content/blog`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-material-ui`,
        `gatsby-transformer-remark`,
    ],
};

export {};
