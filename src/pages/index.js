import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

const Root = styled.div`
  font-family: 'Lora', 'Times New Roman';
  color: white;
  margin: 32px 64px;
`;

const SiteTitle = styled.h1`
  font-size: 72px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin: 16px 0px;

  a {
    color: white;
  }

  a:visited {
    color: white;
  }
`;

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Root>
      <SiteTitle>On Black People & Medicine</SiteTitle>
      <Subtitle>An ongoing research project by <a href="http://bomani.xyz/">Bomani Oseni McClendon</a>. </Subtitle>
    </Root>
  );
};

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Content"}}) {
      edges {
        node {
          data {
            Content
            Type
            Is_Quote
            Section
            Year
            Link
          }
        }
      }
    }
  }
`

export default IndexPage
