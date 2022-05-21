import React, { ReactNode } from "react"

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <small>MOBILE LAYOUT</small>
    {children}
  </div>
)

export default Layout
