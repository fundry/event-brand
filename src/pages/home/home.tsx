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
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <BgTitle support>Support For Your Event Type</BgTitle>
          <Text padded>
            Oasis has features to provide support your specific type of event.
          </Text>
        </div>

        <Cards>
          {Users.map(({ type, title, desc, id }) => {
            return (
              <CustomCard key={id}>
                <Contain center>
                  <img
                    alt="sample"
                    src={sample}
                    style={{ maxWidth: "17rem" }}
                  />
                  <br />
                  <Title features>{title} </Title>
                  <Text style={{ textAlign: "center" }} small center>
                    {desc}
                  </Text>
                  <br />
                  <Flex justifyCenter>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Flex>
                        Create a {type}{" "}
                        <div style={{ paddingLeft: "7px" }}>
                          <FiArrowRight style={{ fontSize: "1.8rem" }} />
                        </div>
                      </Flex>
                    </Link>
                  </Flex>
                  <br />
                </Contain>
              </CustomCard>
            )
          })}
        </Cards>

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
