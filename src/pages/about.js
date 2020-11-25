import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>Here's a little something about me.</p>
        <p>
          Hire me for work <Link to="/contact">Here!</Link>
        </p>
      </Layout>
    </div>
  )
}

export default About
