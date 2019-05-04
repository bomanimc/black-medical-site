import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div />
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
