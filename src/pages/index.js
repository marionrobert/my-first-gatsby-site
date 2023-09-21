import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";


const HomePage = () => {
  return (
    <main>
      <Layout pageHeading="Home" pageTitle="Home">
      <p>Blablablablabl</p>
      <Link to='/about'>About</Link>

      </Layout>
    </main>
  )
}

export default HomePage;
