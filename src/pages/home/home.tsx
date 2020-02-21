import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "gatsby"

import Feature from "../../assets/svg/features.svg"
import {
  Text,
  Title,
  Items,
  Body,
  CustomCard,
  BgTitle,
} from "../../styles/style"
import { FeaturesList } from "../../data"

import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Security from "./security"

import Attendees from "./features/attendees"
import Speakers from "./features/speakers"

const Contain = styled.div``

const data = [
  {
    id: 1,
    title: " Conferences ",
    desc: " Create conferences for a shorter duration ",
  },

  {
    id: 2,
    title: "Meetups",
    desc: "Create meetups that lasts for a specified duration ",
  },
]

const Home = (): JSX.Element => {
  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const handleResize = value => {
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
        <BgTitle>Better way to manage Events</BgTitle>

        <Text>
          Conferences are hard to organize , we know!. <br /> <br /> Eventful
          helps you automate somethings . From creating teams to reviewing
          Speakers slides. From creating teams to reviewing Speakers slides.
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
            {data.map(({ title, desc, id }) => {
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
            {data.map(({ title, desc, id }) => {
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

        <Items>
          {FeaturesList.map(({ title, id, text }) => {
            return (
              <div>
                <Contain key={id}>
                  <Flex justifyCenter>
                    <img
                      src={Feature}
                      alt="feature"
                      style={{
                        maxHeight: "50%",
                        maxWidth: "70%",
                        padding: "1em",
                      }}
                    />
                  </Flex>
                  <Title features>{title}</Title>

                  <Text items>{text}</Text>

                  <Link to="">
                    <Flex justifyCenter>
                      <p> Learn More </p>
                      <IoIosArrowForward
                        style={{ fontSize: "1.5em", paddingLeft: "5px" }}
                      />
                    </Flex>
                  </Link>
                </Contain>
              </div>
            )
          })}
        </Items>

        <div>
          <Title features> Integrate With Your Ticketers </Title>
          <Text items>
            Use your existing ticket managers while managing other aspects of
            your event within Eventful
          </Text>
        </div>

        <br />
        <Speakers />
        <Attendees />

        <Security />
      </Body>
    </Layout>
  )
}

export default Home
