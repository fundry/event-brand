import React from "react"
import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"

import Attendees from "./features/attendees"
import Speakers from "./features/speakers"
import Organizers from "./features/organizers"

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />
      <p> Top home component here ... would contain descriptions </p>
      <br />

      <div>
        <Organizers />
        <Speakers />
        <Attendees />
      </div>
    </Layout>
  )
}

export default Home
