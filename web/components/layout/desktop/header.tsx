import Logo from "~/components/element/logo"

const Header = () => (
  <div>
    <h1
      css={{
        color: "red",
      }}>
      <Logo />
    </h1>
    <h3
      css={{
        color: "black",
        //position: "relative",
      }}>
      <a href='google.com'>link1</a>
    </h3>
    <h3
      css={{
        color: "black",
        //position: "relative",
      }}>
      <a href='google.com'>link2</a>
    </h3>
  </div>
)

export default Header
