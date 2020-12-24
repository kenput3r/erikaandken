import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = styled.div`
  .hero-container {
    max-width: 60vw;
    margin: 1.45rem auto 5rem;
    @media (max-width: 991px) {
      max-width: 100%;
    }
    @media (max-width: 500px) {
      margin: 0;
    }
  }
  .quote {
    background-color: var(--primary-medium);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    font-size: 3rem;
    line-height: 4rem;
    text-align: center;
    min-height: 40vh;
    padding: 30px 15px;
    p {
      font-family: var(--title-font);
      max-width: 80vw;
      margin: 0 auto;
      @media (max-width: 500px) {
        font-size: 2rem;
        max-width: 100%;
      }
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5rem 0 5rem auto;
    max-width: 80vw;
    &.reverse {
      flex-direction: row-reverse;
      margin: 5rem auto 5rem 0;
    }
    @media (max-width: 991px) {
      max-width: 100%;
    }
  }
  .img-container {
    width: 50%;
    max-width: 50%;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 50%;
    max-width: 50%;
    a {
      color: var(--primary-medium);
      text-decoration: none;
    }
  }
  h2 {
    font-size: 3rem;
  }
  .img-container,
  .details {
    padding: 15px;
    @media (max-width: 500px) {
      flex: none;
      width: 100%;
      max-width: 100%;
    }
  }
  .button-container {
    border: 4px solid var(--primary-medium);
    height: 74px;
    margin-left: 10px;
    margin-top: 10px;
    width: 320px;
    max-width: 100%;
    a {
      background-color: var(--primary-medium);
      color: #ffffff;
      display: block;
      font-size: 2rem;
      padding: 20px;
      text-align: center;
      width: 100%;
      margin-top: -10px;
      margin-left: -10px;
    }
  }
  .video-container {
    position: relative;
    margin: 5rem auto 0;
    max-width: 60vw;
    width: 60vw;
    @media (max-width: 767px) {
      margin-top: 0;
      max-width: 100%;
      width: 100%;
    }
  }
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
  }
  .video-wrapper iframe,
  .video-wrapper video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const IndexPage = ({ data }) => (
  <Layout page="Home">
    <SEO title="Married Since October 1, 2020" page="index" />
    <Page>
      <div className="hero-container">
        <Img
          fluid={data.heroImage.childImageSharp.fluid}
          alt="Erika and Ken walking down isle holding hands"
        />
      </div>
      <div className="quote">
        <p>With my whole heart for my whole life</p>
      </div>
      {data.allHomepageSectionsJson.edges.map(({ node }, index) => (
        <div className={index % 2 === 0 ? `row` : `row reverse`} key={node.id}>
          <div className="img-container">
            <Img fluid={node.img.childImageSharp.fluid} alt={node.img_alt} />
          </div>
          <div className="details">
            <h2>
              <Link to={`/${node.slug}`}>{node.title}</Link>
            </h2>
            <p>{node.subHeading}</p>
            <div className="button-container">
              <Link to={`/${node.slug}`}>View Photos</Link>
            </div>
          </div>
        </div>
      ))}
      <div className="quote">
        <p>
          Marriage is telling the person you love that you’re not going
          anywhere.
        </p>
      </div>
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            width="1920"
            height="1080"
            src="https://www.youtube.com/embed/2x7RH4tt3nk?rel=0"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Erika's and Ken's Wedding"
          ></iframe>
        </div>
      </div>
    </Page>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    heroImage: file(relativePath: { eq: "just-married.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allHomepageSectionsJson {
      edges {
        node {
          id
          img {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img_alt
          slug
          subHeading
          title
        }
      }
    }
  }
`
