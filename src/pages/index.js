import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../components/index.module.css'
import Blob from '../assets/blob_6-3-6.svg'





const IndexPage = ( ) => {

  return (
      <Layout>
        <div className={styles.page}>
            <h1>Hello.</h1>
            <h2>I'm <span>George</span>, a full-stack developer living in beautiful Greece. </h2>
            <h2> Frameworks  that i enjoy coding are :</h2>
            
          <Blob 
          width = {800} 
          className = "blob"
          style={{ padding: "16px" , position: "absolute", right:"0px",top:"0px",zIndex:"-2" }}
          />
            <p>Need a developer? <Link to = "/contact">Contact Me</Link> </p>
        </div>
        
        
        
    </Layout>
  )
  }






export default IndexPage