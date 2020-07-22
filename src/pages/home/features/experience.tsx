import React, { useState } from "react"
import styled from "styled-components"
import { FiArchive } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"
import { IoMdGitNetwork, IoMdColorPalette } from "react-icons/io"
import media from "styled-media-query"

import { Text, Contain, Title, HeadTitle, Body } from "../../../styles/style"

import "./test.css"

const Circle = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  border: 1px solid #f84e06;
  display: flex;
  background: ${(props: { active: any }) =>
    props.active ? "#401364" : "transparent"};
  justify-content: center;
  transition: all 400ms;
  align-items: center;
  color: ${(props: { active: any }) => (props.active ? "#fff" : "#F84E06")};
  &:  hover {
    cursor: pointer;
    background: #f84e06;
    color: #fff;
  }
  ${media.lessThan("large")`
  height: 55px;
  width: 55px;
  `};
  ${media.lessThan("medium")`
  height: 50px;
  width: 50px;
  `};
  ${media.lessThan("small")`
  height: 45px;
  width: 45px;
  `};
`

const Divider = styled.div`
  width: 8rem;
  border: 1px solid #401364;
  ${media.lessThan("medium")`
  width: 7rem;
  border: 1px solid #401364;
  `};
  ${media.lessThan("small")`
  width: 5rem;
  border: 0.8px solid #401364;
  `};
`

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem 2rem;
  grid-template-columns: 5rem auto 25rem; 
  p {
    padding : 0rem 5rem
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
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex" }}>
            <Circle
              active={ActiveColumn === "archives"}
              onClick={() => setActiveColumn("archives")}
            >
              {" "}
              <FiArchive style={{ fontSize: "1.5rem" }} />{" "}
            </Circle>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0rem 0.7rem",
              }}
            >
              <Divider />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <Circle
              active={ActiveColumn === "versioned"}
              onClick={() => setActiveColumn("versioned")}
            >
              {" "}
              <IoMdGitNetwork style={{ fontSize: "1.5rem" }} />{" "}
            </Circle>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0rem 0.7rem",
            }}
          >
            <Divider />
          </div>

          <div style={{ display: "flex" }}>
            <Circle
              active={ActiveColumn === "templates"}
              onClick={() => setActiveColumn("templates")}
            >
              {" "}
              <IoMdColorPalette style={{ fontSize: "2rem" }} />{" "}
            </Circle>
          </div>
        </div>
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
                Give your attendees the oppurtunity to make an informed choice
                about your event by going through an automatically compiled
                archive of your event.
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
            <Title style={{ color: "#401364" }}> Event Templates </Title> <br />
            <Text> See event Archive </Text>
            <br />
          </div>
        </CSSTransition>
        <br />
      </Contain>
      <br />
      <br />
    </Body>
  )
}

export default Experience
