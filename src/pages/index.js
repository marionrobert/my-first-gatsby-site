import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";



const HomePage = () => {
  return (
    <>
      <Layout pageHeading="Home" pageTitle="Home">
      <p>Blablablablabl</p>
      <StaticImage src="../images/background.jpg" alt="backgroundimage" placeholder="blurred" loading="eager"></StaticImage>
      <StaticImage src="../images/background.jpg" alt="backgroundimage" placeholder="dominantColor"></StaticImage>
      <Link to='/about'>About</Link>
      </Layout>
    </>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

export default HomePage;
