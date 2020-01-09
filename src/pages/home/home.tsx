import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"
import media from "styled-media-query"
import posed from "react-pose"

import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Security from "./security"

import Attendees from "./features/attendees"
import Speakers from "./features/speakers"
import Organizers from "./features/organizers"

const Body = styled.div`
  padding: 3em;
  ${media.lessThan("medium")`
    padding : 1.5em
  `};
  ${media.lessThan("small")`
    padding : 0.8em
  `};
`

const Title = styled.h4`
  font-weight: ${props => (props.features ? "bold" : "normal")};
  text-align: ${props => (props.features ? "center" : null)};
`

const Text = styled.p`
  font-size: 1.2em;
  text-align: ${props => (props.features ? "center" : null)};
`

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

const BgTitle = styled.h1`
  font-weight: bold;
`

const Contain = styled.div``

const autoGrid = (minColumnWidth = 200, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
})

const Items = styled.div({
  ...autoGrid(220, 20),
  padding: "3em",
  marginLeft: "1.5em",
})

const FeaturesList = [
  {
    id: 1,
    title: "Automated Image Delivery",
    text:
      "All images taken during an event are sent to registered event attendees.",
    link: "",
  },

  {
    id: 2,
    title: "Review speakers slides",
    text:
      "All images taken during an event are sent to registered event attendees.",
    link: "",
  },

  {
    id: 3,
    title: "Create Bucket list",
    text:
      "All images taken during an event are sent to registered event attendees.",
    link: "",
  },

  {
    id: 4,
    title: "Automate Your Tasks",
    text:
      "All images taken during an event are sent to registered event attendees.",
    link: "",
  },
]
const Home = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />

      <Body style={{ color: "#401364" }}>
        <br />
        <BgTitle>Better way to manage Events</BgTitle>

        <Text>
          Conferences are hard to organize , we know!. <br /> <br /> Eventful
          helps you automate somethings . From creating teams to reviewing
          Speakers slides. From creating teams to reviewing Speakers slides.
        </Text>

        <Flex justifyAround>
          {data.map(({ title, desc, id }) => {
            return (
              <Card
                style={{
                  margin: "1em",
                  padding: "1em",
                  width: "35em",
                  boxShadow: "0px 3px 4px grey",
                }}
                key={id}
              >
                {" "}
                <br /> <br />
                <Title style={{ textAlign: "center" }}> {title} </Title>
                <Text style={{ textAlign: "center" }}> {desc} </Text>
                <br /> <br />
              </Card>
            )
          })}
        </Flex>

        <br />

        <Items>
          {FeaturesList.map(({ title, id, text }) => {
            return (
              <div>
                <Contain key={id}>
                  <Title features>{title}</Title>

                  <Text features>{text}</Text>

                  <Flex justifyCenter>
                    <p> Learn More </p>
                    <IoIosArrowForward
                      style={{ fontSize: "1.5em", paddingLeft: "5px" }}
                    />
                  </Flex>
                </Contain>
              </div>
            )
          })}
        </Items>
        <br />
        <div>
          <Organizers />
          <Speakers />
          <Attendees />
        </div>

        <Security />
      </Body>
    </Layout>
  )
}

export default Home
