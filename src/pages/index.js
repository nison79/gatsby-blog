import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { graphql , useStaticQuery } from 'gatsby'
import styles from '../components/index.module.css'


const getImage = graphql`
{
  file(relativePath: {eq:"pap1.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`



const IndexPage = ( ) => {
  const data = useStaticQuery(getImage)
  console.log(data);

  return (
      <Layout>
        <div className={styles.page}>
            <h1>Hello.</h1>
            <h2>I'm George, a full-stack developer living in beautiful Greece. </h2>
            
            <article>
                <Img 
                fluid={data.file.childImageSharp.fluid}
                fadeIn={true}
                className="image"
                />
            </article>
            <p>Need a developer? <Link to = "/contact">Contact Me</Link> </p>
        </div>
        
        
        
      </Layout>
  )
  }






export default IndexPage