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
  Body,
} from "../../../styles/style"
import { ExperienceFeatures } from "../../../data"

import "./test.css"

const Experience = () => {
  const [ActiveColumn, setActiveColumn] = useState<string>("Polls")

  return (
    <Body>
      <Contain>
        <BgTitle center support>
          Immersive Event Experience{" "}
        </BgTitle>

        <Flex justifyCenter>
          <Switch>
            <Flex>
              <Flex>
                <SwitchBtn onClick={() => setActiveColumn("Polls")}>
                  {" "}
                  Polls{" "}
                </SwitchBtn>
                <div style={{ borderRight: "4px solid  #401364" }} />
              </Flex>

              <Flex>
                <SwitchBtn onClick={() => setActiveColumn("Feedback")}>
                  {" "}
                  Feedback{" "}
                </SwitchBtn>
                <div style={{ borderRight: "4px solid  #401364" }} />
              </Flex>

              <SwitchBtn onClick={() => setActiveColumn("Chat")}>
                {" "}
                Chat{" "}
              </SwitchBtn>
            </Flex>
          </Switch>
        </Flex>
        <br />

        <Slider>
          {ExperienceFeatures.map(({ id, column, title, text }) => {
            return (
              <CSSTransition
                timeout={500}
                unmountOnExit
                in={column === ActiveColumn}
                classNames={"fade"}
              >
                <Flex justifyCenter>
                  <Body
                    style={{ textAlign: "center" }}
                    padded
                    key={id}
                    widthed
                    center
                    id={id}
                    className={"slider-container"}
                  >
                    <img
                      alt="Experience art "
                      src={require(`../../../assets/sample/2.svg`)}
                      style={{ height: "auto", maxWidth: "100%" }}
                    />
                    <Title bold support>
                      {title}
                    </Title>
                    <Text style={{ padding: "0rem 2rem" }} small center>
                      {text}
                    </Text>
                  </Body>
                </Flex>
              </CSSTransition>
            )
          })}
        </Slider>
      </Contain>
    </Body>
  )
}

export default Experience
