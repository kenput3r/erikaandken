import React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
        marginBottom: `2rem`,
        textAlign: `center`,
      }}
    >
      © {new Date().getFullYear()}{" "}
      <a href="https://github.com/kenput3r">@kenput3r</a>
    </footer>
  )
}

export default Footer
