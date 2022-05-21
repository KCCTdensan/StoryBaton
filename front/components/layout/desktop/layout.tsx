import React, { ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
