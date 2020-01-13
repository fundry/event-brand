import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"
import media from "styled-media-query"
import posed from "react-pose"
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
import Organizers from "./features/organizers"

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
                <Text style={{ textAlign: "center" }}> {desc} </Text>
                <br /> <br />
              </CustomCard>
            )
          })}
        </Flex>

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
        <br />
        <Speakers />
        <Attendees />

        <Security />
      </Body>
    </Layout>
  )
}

export default Home
