import React, { Component } from "react"
import styled from "styled-components"
import media from "styled-media-query"

import {
  Text,
  CustomButton as Button,
  Title,
  HeadTitle,
} from "../../../styles/style"
import Sample from "../../../assets/svg/illustration.svg"
import Ipad from "../../../assets/svg/ipad.svg"
import CommunityBckg from "../../../assets/svg/community.svg"
import useWindowWidth from "../../../styles/resize"

const Body = styled.div`
  padding: 5rem 2rem;
  color: #22263d;
  overflow: hidden;
  ${media.lessThan("large")`
    padding: 2rem 3rem;
  `}
  ${media.lessThan("medium")`
    padding: 2rem 1.5rem;
  `};
`

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
`

const Card = styled.div`
  margin: 2rem 1rem;
  height: auto;
  padding: 1.5rem 1rem;
  border: 1px solid #c0c0c0;
  width: 25rem;
  border-radius: 5px;
`

const Data = [
  {
    id: 1,
    title: "Volunteer For All Events",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem unde et blanditiis velit aliquam adipisci, at esse velfugiat, debitis animi illum molestiae. Excepturi nam quo id esse officia?",
    link: "/service",
    linkText: "",
  },
  {
    id: 2,
    title: "Create Your Talk Drafts",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem unde et blanditiis velit aliquam adipisci, at esse velfugiat, debitis animi illum molestiae. Excepturi nam quo id esse officia?",
    link: "/service",
    linkText: "",
  },
  {
    id: 3,
    title: "Inclusive Talk Approval Process",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem unde et blanditiis velit aliquam adipisci, at esse velfugiat, debitis animi illum molestiae. Excepturi nam quo id esse officia?",
    link: "/service",
    linkText: "",
  },
]

export default class community extends Component {
  state = {
    transform: 30,
    imgTransform: 80,
  }

  render() {
    return (
      <Body img={CommunityBckg}>
        <HeadTitle style={{ fontWeight: "lighter" }} align="center">
          Take Advantage Of Oasis <br />
          <span
            style={{
              color: "#F84E06",
              margin: "0rem 1rem",
            }}
          >
            When Not Organizing Events.
          </span>
        </HeadTitle>
        <br />

        <div>
          <Grid>
            {Data.map(({ id, title, text, link }) => {
              return (
                <Card key={id}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      style={{ maxWidth: "30%" }}
                      src={require("../../../assets/svg/illustration.svg")}
                    />
                  </div>
                  <br />

                  <Title style={{ fontWeight: "lighter" }} small center>
                    {title}
                  </Title>
                  <Text style={{ padding: "0.7rem 0" }} small center>
                    {text}
                  </Text>

                  <div style={{ textAlign: "center" }}>
                    <a href={`${link}`}>Apply To An Event</a>
                  </div>
                </Card>
              )
            })}
          </Grid>
        </div>
        <br />
      </Body>
    )
  }
}
