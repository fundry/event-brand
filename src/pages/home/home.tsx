import React from "react"
import styled from "styled-components"
import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"

import Attendees from "./features/attendees"
import Speakers from "./features/speakers"
import Organizers from "./features/organizers"

const Body = styled.div`
  padding: 0.5em;
`

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />

      <Body>
        <p style={{ textAlign: "center" }}>
          {" "}
          Top home component here ... would contain descriptions{" "}
        </p>
        <br />

        <div>
          <Organizers />
          <Speakers />
          <Attendees />
        </div>
      </Body>
    </Layout>
  )
}

export default Home
