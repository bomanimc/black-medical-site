import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { List } from 'immutable';

import TopicSection from '../components/topicSection';

const Root = styled.div`
  font-family: 'Lora', 'Times New Roman';
  color: white;
  margin: 32px 64px;
  line-height: normal;
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

const prepareData = data => {
  const edges = data.allAirtable.edges;
  const contentData = List(edges.map(edge => edge.node.data));
  return contentData.groupBy(data => data.section);
}

const IndexPage = ({ data }) => {
  const contentBySections = prepareData(data);

  const topicSections = contentBySections.map((contentData, topicSection) => {
    return <TopicSection key={topicSection} topic={topicSection} contentData={contentData.toArray()} />; 
  });

  return (
    <Root>
      <SiteTitle>On Black People & Medicine</SiteTitle>
      <Subtitle>
        An ongoing research project by <a href="http://bomani.xyz/">Bomani Oseni McClendon</a>.
      </Subtitle>

      <MainContent>
        {topicSections.valueSeq().toArray()}
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
