import * as React from "react"
import { Link } from "gatsby"
import { container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle} from "./layout.module.css"
import { useStaticQuery, graphql } from "gatsby"


const Layout = (props) => {
  const pageTitle = props.pageTitle
  const pageHeading = props.pageHeading
  const children = props.children
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
          buildTime
        }
      }
    `
  )
  console.log("data from layout component", data)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="/blog" className={navLinkText}>My blog posts</Link></li>
        </ul>
      </nav>
      <h1 className={heading}>{pageHeading}</h1>
      <h2>{data.site.siteMetadata.title}</h2>
      {children}
    </div>
  )
}
export default Layout
