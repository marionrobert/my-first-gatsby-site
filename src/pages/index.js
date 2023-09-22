import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";


const HomePage = () => {
  return (
    <main>
      <Layout pageHeading="Home" pageTitle="Home">
      <p>Blablablablabl</p>
      <StaticImage src="../images/background.jpg" alt="backgroundimage"></StaticImage>
      <Link to='/about'>About</Link>

      </Layout>
    </main>
  )
}

export default HomePage;
