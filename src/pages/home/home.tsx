import React from "react"
import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />
      <p> Home component here </p>
    </Layout>
  )
}

export default Home
