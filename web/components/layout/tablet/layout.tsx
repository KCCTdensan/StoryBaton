import React, { ReactNode } from "react"

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <small>TABLET LAYOUT</small>
    {children}
  </div>
)

export default Layout
