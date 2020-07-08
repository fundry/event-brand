import React, { useState } from "react"
import Flex from "styled-flex-component"
import { SwitchTransition, CSSTransition } from "react-transition-group"

import {
  Text,
  BgTitle,
  Contain,
  Slider,
  Title,
  Switch,
  SwitchBtn,
  HeadTitle,
  Body,
} from "../../../styles/style"
import { ExperienceFeatures } from "../../../data"

import "./test.css"

const Experience = () => {
  const [ActiveColumn, setActiveColumn] = useState<string>("Polls")

  return (
    <Body>
      <Contain>
        <HeadTitle>
          {" "}
          Maintain <span style={{ color: "#ED7440" }}>
            {" "}
            Long Term Support{" "}
          </span>{" "}
        </HeadTitle>
        <br />
        <Title> Event Archives </Title> <br />
        <Title> Versioned Events </Title> <br />
        <Title> Event Templates </Title>
        <br />
      </Contain>
    </Body>
  )
}

export default Experience
