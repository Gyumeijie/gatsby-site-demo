import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Header headerText={data.site.siteMetadata.homeTitle} />
    <p>Welcome to Gatsby's site demo</p>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        homeTitle
      }
    }
  }
`
