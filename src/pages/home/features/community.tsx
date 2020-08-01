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
  padding: 5rem 4rem;
  color: #fff;
  background: #22263d;
  overflow: hidden;
  ${media.lessThan("large")`
    padding: 2rem 3rem;
  `}
  ${media.lessThan("medium")`
    padding: 2rem 1.5rem;
  `};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: center;
  grid-gap: 1rem 2rem;
`

export default class community extends Component {
  state = {
    transform: 30,
    imgTransform: 80,
  }

  render() {
    return (
      <Body img={CommunityBckg}>
        <HeadTitle align="center">
          Oasis Extends Beyond
          <span
            style={{
              color: "#F84E06",
              margin: "0rem 1rem",
            }}
          >
            Organizing Events.
          </span>
        </HeadTitle>
        <br />

        <div>
          <Grid>
            <div style={{ marginTop: "5rem" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Ipad} style={{ maxWidth: "80%" }} />
              </div>
              <br />
              <Title small center>
                {" "}
                Volunteer For All Events{" "}
              </Title>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Ipad} style={{ maxWidth: "80%" }} />
              </div>
              <br />

              <Title small center>
                {" "}
                Create Your Talk Drafts{" "}
              </Title>
            </div>

            <div style={{ marginTop: "5rem" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Ipad} style={{ maxWidth: "80%" }} />
              </div>
              <br />

              <Title small center>
                {" "}
                Inclusive Talk Approval Process{" "}
              </Title>
            </div>
          </Grid>
        </div>
        <br />
      </Body>
    )
  }
}
