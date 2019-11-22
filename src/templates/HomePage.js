import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Products from '../components/Products'
import Content from '../components/Content'
import Layout from '../components/Layout'




// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body, }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container skinny">
        <Content source={body} />
      </div>
    </section>
    <section className="section">
      <div className="container skinny">
        <Content source={body} /> 
        <Products 
          large
          prodtitle="Strategic marketing planning session"
          proddisc="Feel like you need to get your business on track for growth and just don’t know where to start?"
          productbutton="Get your planning session"
          productlink="#"
          backgroundImage={featuredImage}
        />
        <Products 
          large
          prodtitle="Strategic marketing planning session"
          proddisc="Feel like you need to get your business on track for growth and just don’t know where to start?"
          productbutton="Get your planning session"
          productlink="#"
          backgroundImage={featuredImage}
        />
        <Products 
          large
          prodtitle="Strategic marketing planning session"
          proddisc="Feel like you need to get your business on track for growth and just don’t know where to start?"
          productbutton="Get your planning session"
          productlink="#"
          backgroundImage={featuredImage}
        />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
