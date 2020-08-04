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
  height: 55vh;
  padding: 1rem 1rem;
  border: 1px solid #c0c0c0;
  width: 25rem;
  border-radius: 5px;
`

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
            <Card>
              <Title style={{ fontWeight: "lighter" }} small center>
                {" "}
                Volunteer For All Events{" "}
              </Title>

              <div style={{ textAlign: "center" }}>
                <a href="/">Apply To An Event</a>
              </div>
            </Card>

            <Card>
              <Title style={{ fontWeight: "lighter" }} small center>
                {" "}
                Create Your Talk Drafts{" "}
              </Title>

              <div style={{ textAlign: "center" }}>
                <a href="/">Start A Talk Draft</a>
              </div>
            </Card>

            <Card>
              <Title style={{ fontWeight: "lighter" }} small center>
                Inclusive Talk Approval Process{" "}
              </Title>

              <div style={{ textAlign: "center" }}>
                <a href="/">Submit A Talk Draft</a>
              </div>
            </Card>
          </Grid>
        </div>
        <br />
      </Body>
    )
  }
}
