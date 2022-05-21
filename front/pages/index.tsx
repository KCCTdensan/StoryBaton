import Layout from "~/components/layouts/layout"

const Index = () => (
  <Layout>
    <h2>about</h2>
    <div>
      <textarea
        css={{
          width: "100%",
          height: "auto",
        }}
        value='test'
        onChange={() => {}}></textarea>
    </div>
    <div>
      <button>send</button>
    </div>
  </Layout>
)

export default Index
