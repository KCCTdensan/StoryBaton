import Header from "./Header"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout