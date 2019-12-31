import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from " react-icons/io"

import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"

import Attendees from "./features/attendees"
import Speakers from "./features/speakers"
import Organizers from "./features/organizers"

const Body = styled.div`
  padding: 0.5em;
`

const Title = styled.h4``

const Text = styled.p``

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

const BgTitle = styled.h3`
  font-weight: bold;
`

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />

      <Body style={{ color: "#401364" }}>
        <br />
        <BgTitle>Better way to manage Events</BgTitle>

        <Text>
          Conferences are hard to organize , we know!. <br /> Eventful helps you
          automate somethings . From creating teams to reviewing Speakers
          slides. From creating teams to reviewing Speakers slides.
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

        <BgTitle>All your files, managed for you</BgTitle>

        <Text>
          You love photos , we know!. <br />
          <br />
          Eventful allocates each user a cloud storage to store files from
          confernces .
          <br />
          <br />
          Event organizers upload all photos to their alllocated storage and we
          help them deliver the photos to users whose images are in the photo.
        </Text>
        <Flex>
          {" "}
          <p> Learn More </p>
          <IoIosArrowForward
            style={{ fontSize: "1.5em", paddingLeft: "5px" }}
          />
        </Flex>

        <br />
        <div>
          <Organizers />
          <Speakers />
          <Attendees />
        </div>
      </Body>
    </Layout>
  )
}

export default Home
