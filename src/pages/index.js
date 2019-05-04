import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import TopicSection from '../components/topicSection';

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

const MainContent = styled.div`
  margin-top: 128px;
`;

const IndexPage = ({ data }) => {
  const airtableRows = data.allAirtable.edges;

  return (
    <Root>
      <SiteTitle>On Black People & Medicine</SiteTitle>
      <Subtitle>An ongoing research project by <a href="http://bomani.xyz/">Bomani Oseni McClendon</a>. </Subtitle>

      <MainContent>
        <TopicSection topic={"Test"} contentEdges={airtableRows} />
      </MainContent>
    </Root>
  );
};

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Content"}}) {
      edges {
        node {
          data {
            content: Content
            type: Type
            isQuote: Is_Quote
            section: Section
            year: Year
            link: Link
          }
        }
      }
    }
  }
`

export default IndexPage
