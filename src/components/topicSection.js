import React from "react";
import styled from "styled-components";

import ContentItem from './contentItem';

const Topic = styled.h3`
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 36px 0px;
`;

const TopicSection = ({ topic, contentData }) => {
  const contentItems = contentData.map(data => 
    <ContentItem content={data.content} type={data.type} />
  );

  return (
    <div>
      <Topic>{topic}</Topic>
      {contentItems}
    </div>
  );
};
  

export default TopicSection;