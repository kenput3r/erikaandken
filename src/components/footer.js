import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Component = styled.footer`
  background-color: var(--primary-medium);
  color: #ffffff;
  padding-bottom: 1.45rem;
  padding-top: 3rem;
  ul {
    margin-left: 0;
    text-align: center;
  }
  li {
    display: inline-block;
    list-style-type: none;
  }
  a {
    color: #ffffff;
    display: inline-block;
    font-weight: bold;
    padding: 5px 10px;
  }
  p {
    text-align: center;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allPagesJson {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)
  return (
    <Component>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {data.allPagesJson.edges.map(edge => (
            <li key={edge.node.id}>
              <Link to={`/${edge.node.slug}`}>
                <span>{edge.node.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p>
        © {new Date().getFullYear()}{" "}
        <a href="https://github.com/kenput3r">@kenput3r</a>
      </p>
    </Component>
  )
}

export default Footer
