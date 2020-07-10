import React, { useState, useEffect } from "react"

import {
  Text,
  HeadTitle,
  Body,
  BgTitle,
  BigTitle,
  Title,
} from "../../styles/style"

import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Security from "./security"

import Integration from "./features/integrations"
import App from "./features/app"
import Media from "./features/media"
import Experience from "./features/experience"
import Community from "./features/community"

const Home = (): JSX.Element => {
  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const handleResize = (value: React.SetStateAction<null>) => {
    setWidth(value)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize.bind(this))
    return () => window.removeEventListener("resize", handleResize.bind(this))
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <Banner />

      <Body
        style={{ color: "#401364", background: "#f2f5ff", overflow: "hidden" }}
      >
        <HeadTitle align="center" color="#F84E06">
          Leverage Oasis{" "}
          <span style={{ color: "#401364" }}> For A Heads Up </span>
        </HeadTitle>

        <Media />
        <br />
        <br />

        <Integration />
      </Body>

      <br />
      <br />
      <Experience />

      <div
        style={{
          background: "linear-gradient(to top,#22263d, #F84E06)",
          padding: "3rem",
          color: "#fff",
        }}
      >
        <br />
        <Title center>Regionally Distributed Meetup Groups</Title>

        <Text white small center>
          Create Multiple groups of your event across different regions to reach
          a far greater audience. <br />
          Meetup Groups are quick and easy to setup and launch as they inherit
          the features of the parent event.
        </Text>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Community />
      <div style={{ color: "#401364", background: "#f2f5ff" }}>
        <br />
        <br />
        <App />
        <br />
        <br />
      </div>

      <Security />
      <br />
      <br />
    </Layout>
  )
}

export default Home
