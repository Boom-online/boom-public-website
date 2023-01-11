import {graphql, useStaticQuery} from 'gatsby';
import * as React from 'react';

interface SeoProps {
    title?: string;
    description?: string;
}

export default function Seo({title, description}: SeoProps) {
    const {site} = useStaticQuery(graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const defaultTitle = site.siteMetadata?.title;
    const metaDescription = description || site.siteMetadata.description;

    return <React.Fragment>
        <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
        <meta name="description" content={metaDescription}/>

        <meta property="og:title" content={title}/>
        <meta property="og:description" content={metaDescription}/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:creator" content={site.siteMetadata?.author || ``}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={metaDescription}/>
    </React.Fragment>;
}
