import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Container>
    <Link to="/">Home</Link>
    <Header headerText={data.site.siteMetadata.contactTitle} />
    <p>Send us a message!</p>
  </Container>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        contactTitle
      }
    }
  }
`
