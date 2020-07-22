import React, { useState } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import media from "styled-media-query"

import { Text, Contain, Title, HeadTitle, Body } from "../../../styles/style"

import "./test.css"

const CircleList = styled.li`
  list-style: none;
  margin: 1.3rem 0rem;
  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #f84e06;
    background: ${(props: { active: any }) =>
      props.active ? "#401364" : "transparent"};
    transition: all 400ms;
    color: ${(props: { active: any }) => (props.active ? "#fff" : "#F84E06")};
    &: hover {
      cursor: pointer;
      background: #f84e06;
      color: #fff;
    }
  }
  ${media.lessThan("huge")`
  div {
    height: 35px;
    width: 35px;
  }
  `};
  ${media.lessThan("large")`
  div {
  height: 30px;
  width: 30px;
  }
  `};
  ${media.lessThan("medium")`
  div {
    height: 25px;
  width: 25px;
  }
  `};
  ${media.lessThan("small")`
  div {
    height: 20px;
  width: 20px;
  }
  `};
`

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem 2rem;
  grid-template-columns: auto 25rem; 
  p {
    width : 80%;
    padding : 0rem 0.5rem
  }
  ${media.lessThan("large")`
      grid-gap: 0rem 0rem;
      grid-template-columns: auto 25rem; 
      p {
        padding : 0rem 0rem
      }
  `};
  ${media.lessThan("medium")`
  display : flex;
  flex-direction : column;
  align-items: center;
  p {
    padding : 0.4rem 0rem
  }
    `};
};
`

const Experience = () => {
  const [ActiveColumn, setActiveColumn] = useState<string>("archives")

  return (
    <Body>
      <br />
      <Contain>
        <HeadTitle color="#401364">
          Event <span style={{ color: "#F84E06" }}>Long Term Support </span>
        </HeadTitle>

        <div style={{ display: "grid", gridTemplateColumns: "auto 4rem" }}>
          <div>
            <br />
            <CSSTransition
              in={ActiveColumn === "archives"}
              timeout={300}
              classNames={""}
              unmountOnExit
            >
              <Grid>
                <div>
                  <Title style={{ color: "#401364" }}>
                    Compiled Event Archives{" "}
                  </Title>{" "}
                  <Text small>
                    Give your attendees the oppurtunity to make an informed
                    choice about your event by going through an automatically
                    compiled archive of your event.
                  </Text>
                  <br />
                </div>
              </Grid>
            </CSSTransition>

            <CSSTransition
              in={ActiveColumn === "versioned"}
              timeout={300}
              classNames={""}
              unmountOnExit
            >
              <div>
                <br />
                <Title style={{ color: "#401364" }}>
                  Semantically Versioned Events
                </Title>{" "}
                <br />
                <Text> See event Archive </Text>
                <br />
              </div>
            </CSSTransition>

            <CSSTransition
              in={ActiveColumn === "templates"}
              timeout={300}
              classNames={""}
              unmountOnExit
            >
              <div>
                <br />
                <Title style={{ color: "#401364" }}>
                  {" "}
                  Event Templates{" "}
                </Title>{" "}
                <br />
                <Text> See event Archive </Text>
                <br />
              </div>
            </CSSTransition>
            <br />
          </div>

          <div>
            <CircleList>
              <div></div>
            </CircleList>
            <CircleList>
              <div></div>
            </CircleList>
            <CircleList>
              <div></div>
            </CircleList>
            <CircleList>
              <div></div>
            </CircleList>
          </div>
        </div>
      </Contain>
      <br />
      <br />
    </Body>
  )
}

export default Experience
