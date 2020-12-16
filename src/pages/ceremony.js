import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = styled.div`
  h1 {
    background-color: var(--primary-dark);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    width: 100%;
  }
  .image-container {
    max-width: 60vw;
    margin: 20px auto;
  }
`

const Ceremony = ({ data }) => {
  const images = data.allCeremonyJson.edges[0].node.images
  return (
    <Layout>
      <SEO title="Ceremony" />
      <Page>
        <h1>Photos From The Ceremony</h1>
        {images.map(image => (
          <div className="image-container" key={image.id}>
            <Img
              fluid={image.childImageSharp.fluid}
              alt="Erika's and Ken's Ceremony, Idyllwild, California"
            />
          </div>
        ))}
      </Page>
    </Layout>
  )
}

export default Ceremony

export const query = graphql`
  query CeremonyQuery {
    allCeremonyJson {
      edges {
        node {
          images {
            id
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
