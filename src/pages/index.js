import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, fontSize:`1.2rem`, marginBottom: `1.45rem` }}>
     <ul>
        <li> <Link to="/aboutme/">About Me</Link></li>
        <li> <Link to="/projects/">Projects</Link></li>
     </ul>

    </div>
  </Layout>
)

export default IndexPage
