import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome to Gatsby</h1>
      <h2>Let me show you around!</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
