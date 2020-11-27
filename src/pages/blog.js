import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(post => (
            <li>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </li>
          ))}
        </ol>
        <p>Posts will show up here.</p>
      </Layout>
    </div>
  )
}

export default BlogPage
