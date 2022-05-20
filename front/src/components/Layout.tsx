import type { ReactNode } from "react"
import Header from "~/components/Header"
import Footer from "~/components/Footer"

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
