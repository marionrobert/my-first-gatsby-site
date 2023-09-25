import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";


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
export const Head = () => <Seo title="About us" />
export default About;
