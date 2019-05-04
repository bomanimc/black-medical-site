import React from "react";
import styled from "styled-components";

const Content = styled.p`
  font-size: 24px;
  margin-bottom: 16px;
`;

const DetailText = styled.p`
font-size: 16px;
`;

const ContentItem = ({ 
  content, 
  type, 
  // isQuote, 
  year, 
  // link
}) => {
  return (
    <div>
      <Content>{content}</Content>
      <DetailText>{`${year} • ${type}`}</DetailText>
    </div>
  );
};
  

export default ContentItem;