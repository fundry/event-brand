import React, { useState, useEffect } from "react"

import { Text, HeadTitle, Body, Title } from "../../styles/style"

import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Security from "./security"

import Integration from "./features/integrations"
import DistributedMeetups from "./features/distributedMeetups"
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
          padding: "1rem",
          color: "#fff",
        }}
      >
        <DistributedMeetups />
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
