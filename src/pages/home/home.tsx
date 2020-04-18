import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "gatsby"

import {
  Text,
  Title,
  Items,
  Body,
  CustomCard,
  BgTitle,
} from "../../styles/style"
import { Users } from "../../data"

import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Security from "./security"

import Integration from "./features/integrations"
import Attendees from "./features/attendees"
import Speakers from "./features/speakers"
import Media from "./features/media"
import Experience from "./features/experience"
import Networking from "./features/networking"

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

      <Body style={{ color: "#401364", background: "#f2f5ff" }}>
        <br />

        <Text center>
          Eventful helps you automate somethings . From creating teams to
          reviewing Speakers slides. From creating teams to reviewing Speakers
          slides.
        </Text>

        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <BgTitle support>Support For Your Event Type</BgTitle>
          <Text explanation>
            Eventful has features to provide support your specific type of
            event.{" "}
          </Text>
        </div>
        {Width >= 550 ? (
          <Flex justifyAround>
            {Users.map(({ title, desc, id }) => {
              return (
                <CustomCard
                  style={{
                    margin: "1em",
                    padding: "1em",
                    width: "35em",
                  }}
                  key={id}
                >
                  <br /> <br />
                  <Title features>{title} </Title>
                  <Text style={{ textAlign: "center" }} feature>
                    {desc}{" "}
                  </Text>
                  <br /> <br />
                </CustomCard>
              )
            })}
          </Flex>
        ) : (
          <div>
            {Users.map(({ title, desc, id }) => {
              return (
                <CustomCard
                  style={{
                    margin: "1em",
                    padding: "0.5em",
                    width: "22em",
                    textAlign: "center",
                  }}
                  key={id}
                >
                  <br /> <br />
                  <Title features>{title} </Title>
                  <Text style={{ textAlign: "center" }} feature>
                    {desc}{" "}
                  </Text>
                  <br /> <br />
                </CustomCard>
              )
            })}
          </div>
        )}

        <br />

        <Media />

        <Integration />
        <Experience />
        <br />

        <Networking />
        <br />
        <Speakers />
        <Attendees />

        <Security />
      </Body>
    </Layout>
  )
}

export default Home
