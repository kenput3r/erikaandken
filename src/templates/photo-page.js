import React from "react"
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
    text-align: center;
    @media (max-width: 500px) {
      min-height: 30vh;
    }
  }
  .image-container {
    max-width: 60vw;
    margin: 20px auto;
  }
`

const PhotoPage = ({ data }) => {
  const page = data.allPagesJson.edges[0].node
  const images = page.images
  return (
    <Layout page={page.title}>
      <SEO title={page.title} />
      <Page>
        <h1>{page.heading}</h1>
        {images.map(image => (
          <div className="image-container" key={image.id}>
            <Img fluid={image.childImageSharp.fluid} alt={page.altText} />
          </div>
        ))}
      </Page>
    </Layout>
  )
}

export default PhotoPage

export const query = graphql`
  query PhotoPageQuery($slug: String) {
    allPagesJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          altText
          title
          images {
            id
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
        }
      }
    }
  }
`
