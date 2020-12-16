import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Component = styled.header`
  .logo-container {
    max-width: 150px;
    margin: 10px auto;
  }
  nav {
    border-top: 1px solid var(--primary-light);
    border-bottom: 1px solid var(--primary-light);
    padding: 10px 0;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 60vw;
    @media (max-width: 500px) {
      max-width: 100%;
    }
  }
  li {
    list-style-type: none;
    margin-bottom: 0;
    &.active {
      @media (max-width: 369px) {
        display: none;
      }
    }
    a {
      color: var(--primary-medium);
      padding: 5px 10px;
      font-weight: bold;
      text-decoration: none;
    }
  }
`

const Header = ({ page }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "erika-and-ken.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Component>
      <div className="logo-container">
        <Img fluid={data.logo.childImageSharp.fluid} alt="Erika And Ken" />
      </div>
      <nav role="Primary">
        <ul>
          <li className={page === `Home` ? `active` : ``}>
            <Link to="/">Home</Link>
          </li>
          <li className={page === `First Look` ? `active` : ``}>
            <Link to="/first-look">First Look</Link>
          </li>
          <li className={page === `Ceremony` ? `active` : ``}>
            <Link to="/ceremony">Ceremony</Link>
          </li>
          <li className={page === `Ceremony` ? `active` : ``}>
            <Link to="/family-photos">Family Photos</Link>
          </li>
          <li className={page === `Reception` ? `active` : ``}>
            <Link to="/reception">Reception</Link>
          </li>
        </ul>
      </nav>
    </Component>
  )
}

export default Header
