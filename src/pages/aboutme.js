import React from "react"
import { Link } from "gatsby"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Social from "../components/social";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialMedia = [{
  type:"linkedin",
  url:"https://www.linkedin.com/in/zach-phillips-gary-854b05ab/",
},
  {
    type:"Envelope",
    url: "mailto:zphillipsgary+site@gmail.com"
  }
];


const AboutMe = () => (
  <Layout>
    <Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link>
    <SEO title="Page two" />
    <h1>About Me</h1>
    <details>
      <summary>Bio</summary>
      
</details>
    <details>
      <summary>Experience</summary>
      Something small enough to escape casual notice.
</details>
<h2>Social</h2>
    <Social links={socialMedia}></Social>

  </Layout>
)

export default AboutMe
