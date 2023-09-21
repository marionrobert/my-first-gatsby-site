import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";


const About = () => {
  return (
    <main>
      <Layout pageHeading={"About us"} pageTitle={"About us"}>
        <p>Blablablablabl</p>
        <Link to="/">Go back home</Link>
      </Layout>
    </main>
  )
}

export default About;
