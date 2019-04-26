import React, { useReducer } from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import Styles from "./about.module.css"
import { graphql } from "gatsby"

const User = props => (
  <div className={Styles.user}>
    <img src={props.avatar} className={Styles.avatar} alt="" />
    <div className={Styles.description}>
      <h2 className={Styles.username}>{props.username}</h2>
      <p className={Styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

let users = [
  {
    username: "Gyumeijie",
    avatar: "https://avatars0.githubusercontent.com/u/26002780?s=180&v=4",
    excerpt: "I'm Gyumeijie",
  },
  {
    username: "Soledad",
    avatar: "https://avatars0.githubusercontent.com/u/45818957?s=180&v=4",
    excerpt: "I'm Soledad",
  },
]

export default ({ data }) => (
  <Container>
    <Link to="/contact">Contact</Link>
    <Header headerText={data.site.siteMetadata.aboutTitle} />
    {users.map(user => (
      <User
        username={user.username}
        avatar={user.avatar}
        excerpt={user.excerpt}
      />
    ))}
  </Container>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        aboutTitle
      }
    }
  }
`
