import React from "react";
import styled from "styled-components";

const Content = styled.p`
  font-size: 36px;
`;

const DetailText = styled.p`
font-size: 12px;
`;

const ContentItem = ({ 
  content, 
  type, 
  // isQuote, 
  // section, 
  // year, 
  // link
}) => {
  return (
    <div>
      <DetailText>{type}</DetailText>
      <Content>{content}</Content>
    </div>
  );
};
  

export default ContentItem;