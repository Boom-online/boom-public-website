import {graphql, useStaticQuery} from 'gatsby';
import * as React from 'react';

export default function BlogPostTemplate({
                                             data, // this prop will be injected by the GraphQL query below.
                                         }) {


    console.log(data);


    const {markdownRemark} = data; // data.markdownRemark holds your post data
    const {frontmatter, html} = markdownRemark;
    return (
        <div>
            <div>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <h6>{frontmatter.description}</h6>
                <div
                    dangerouslySetInnerHTML={{__html: html}}
                />
            </div>
        </div>
    );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
