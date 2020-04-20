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

import Integration from "./features/integrations"
import Attendees from "./features/attendees"
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

      <Body
        style={{ color: "#401364", background: "#f2f5ff", overflow: "hidden" }}
      >
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
            event.
          </Text>
        </div>

        <Cards>
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
                <Contain center>
                  <br /> <br />
                  <Title features>{title} </Title>
                  <Text style={{ textAlign: "center" }} small center>
                    {desc}
                  </Text>
                  <br />
                  <Flex justifyCenter>
                    <Link to="/">
                      <Flex>
                        Create <FiArrowRight style={{ fontSize: "1.5rem" }} />
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

        <Integration />
      </Body>

      <br />
      <Experience />
      <br />
      <Body style={{ color: "#401364", background: "#f2f5ff" }}>
        <br />
        <Attendees />
        <br />
      </Body>

      <Security />
    </Layout>
  )
}

export default Home
