import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"

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

      <Body>
        <BgTitle style={{ color: "#fff" }}>
          Better way to manage Events{" "}
        </BgTitle>
        <Text>
          Conferences are hard to organize , we know!. Eventful helps you
          automate somethings . From creating teams to reviewing Speakers
          slides. From creating teams to reviewing Speakers slides.
        </Text>

        <Flex justifyAround>
          {data.map(({ title, desc, id }) => {
            return (
              <Card
                style={{
                  padding: "0.5em",
                  width: "45em",
                  boxShadow: "0px 4px 5px grey",
                }}
                key={id}
              >
                <Title style={{ textAlign: "center" }}> {title} </Title>

                <Text style={{ textAlign: "center" }}> {desc} </Text>
              </Card>
            )
          })}
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
