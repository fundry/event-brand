import React, { useState, useEffect } from "react"

import { Text, HeadTitle, Body, BgTitle, BigTitle } from "../../styles/style"

import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Security from "./security"

import BlogOverview from "./blogOverview"
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HeadTitle color="#F84E06" style={{ margin: "0rem 1rem" }}>
            {" "}
            Leverage Oasis{" "}
          </HeadTitle>
          <HeadTitle> For A Heads Up </HeadTitle>
        </div>

        <Media />
        <br />
        <br />

        <Integration />
      </Body>

      <br />
      <br />
      <Experience />
      <br />

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
