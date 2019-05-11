import React from "react";
import styled from "styled-components";

import ContentItem from './contentItem';

const Topic = styled.h3`
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 64px 0px 24px 0px;

  @media (max-width: 1000px) {
    font-size: 24px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, minmax(300px, 1fr));

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
`;

const TopicSection = ({ topic, contentData }) => {
  const contentItems = contentData.map(data => 
    <ContentItem 
      key={data.link}
      content={data.content} 
      link={data.link} 
      type={data.type} 
      year={data.year}
      sourceTitle={data.sourceTitle}
    />
  );

  return (
    <div>
      <Topic>{topic}</Topic>
      <Content>
        {contentItems}
      </Content>
    </div>
  );
};
  

export default TopicSection;