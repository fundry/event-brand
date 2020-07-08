import React, { useState } from "react"
import styled from "styled-components"
import { FiArchive } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"

import { Text, Contain, Title, HeadTitle, Body } from "../../../styles/style"

import "./test.css"

const Circle = styled.div`
  height  : 70px;
  width   : 70px;
  border-radius : 50%;
  border : 1px solid  #F84E06;
  display : flex;
  background : ${(props: { active: any }) =>
    props.active ? "#401364" : "transparent"};
  justify-content : center;
  transition : all 400ms
  align-items : center; 
  color : ${(props: { active: any }) => (props.active ? "#fff" : "#F84E06")};
  &:  hover {
      cursor : pointer
      background : #F84E06
      color : #fff
  }
`

const Divider = styled.div`
  width: 8rem;
  border: 1px solid #401364;
`

const Experience = () => {
  const [ActiveColumn, setActiveColumn] = useState<string>("archives")

  return (
    <Body>
      <br />
      <Contain>
        <HeadTitle color="#401364">
          Maintain <span style={{ color: "#F84E06" }}>Long Term Support </span>
        </HeadTitle>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex" }}>
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
            <Circle
              active={ActiveColumn === "archives"}
              onClick={() => setActiveColumn("archives")}
            >
              {" "}
              <FiArchive style={{ fontSize: "1.7rem" }} />{" "}
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
              <FiArchive style={{ fontSize: "1.7rem" }} />{" "}
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
              <FiArchive style={{ fontSize: "1.7rem" }} />{" "}
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
        </div>

        <CSSTransition
          in={ActiveColumn === "archives"}
          timeout={300}
          classNames={""}
          unmountOnExit
        >
          <div>
            <br />
            <Title> Event Archives </Title> <br />
            <Text> See event Archive </Text>
            <br />
          </div>
        </CSSTransition>

        <CSSTransition
          in={ActiveColumn === "versioned"}
          timeout={300}
          classNames={""}
          unmountOnExit
        >
          <div>
            <br />
            <Title> Event Versioned Events </Title> <br />
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
            <Title> Event Templates </Title> <br />
            <Text> See event Archive </Text>
            <br />
          </div>
        </CSSTransition>
        <br />
      </Contain>
      <br />
    </Body>
  )
}

export default Experience
