import React from "react";
import styled from "styled-components";

import ContentItem from './contentItem';

const Topic = styled.h3`
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
`;

const TopicSection = ({ topic, contentEdges }) => {
  const contentItems = contentEdges.map(edge => {
    const {data} = edge.node;
    console.log(data);
    return <ContentItem content={data.content} type={data.type} />;
  });

  return (
    <div>
      <Topic>{topic}</Topic>
      {contentItems}
    </div>
  );
};
  

export default TopicSection;