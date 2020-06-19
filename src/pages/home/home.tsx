import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FiArrowRight } from "react-icons/fi"
import Flex from "styled-flex-component"

import {
  Text,
  Title,
  Body,
  CustomCard,
  BgTitle,
  Contain,
  Cards,
} from "../../styles/style"
import { Users } from "../../data"

import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Security from "./security"
import sample from "../../assets/svg/illustration.svg"

import Integration from "./features/integrations"
import App from "./features/app"
import Media from "./features/media"
import Experience from "./features/experience"
import Community from "./features/community"

import EventSupport from "./eventSupport"

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
        <br />
        <br />

        <EventSupport />

        <br />

        <Media />
        <br />
        <br />

        <Integration />
      </Body>

      <br />
      <br />
      <Experience />
      <br />

      <div
        style={{
          color: "#fff",
          background: "#35076F",
        }}
      >
        <br />
        <br />
        <Community />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Body style={{ color: "#401364", background: "#f2f5ff" }}>
        <br />
        <br />
        <App />
        <br />
        <br />
      </Body>

      <Security />
      <br />
      <br />
    </Layout>
  )
}

export default Home
