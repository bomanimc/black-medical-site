import React from "react";
import styled from "styled-components";

const Content = styled.p`
  font-size: 24px;
  margin-bottom: 16px;
`;

const DetailText = styled.p`
  font-size: 16px;
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: white;
  }
`;

const ContentItem = ({ 
  content, 
  type, 
  year, 
  link,
  // isQuote
}) => {
  link = <a href={link}>Go to Source</a>;
  
  return (
    <div>
      <Content>{content}</Content>
      <DetailText>{`${year} • ${type} • `}{link}</DetailText>
    </div>
  );
};
  

export default ContentItem;