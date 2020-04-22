import React from "react"
import { Link } from "gatsby"
import Flex from "styled-flex-component"

import {
  Text,
  BgTitle,
  Contain,
  Slider,
  Title,
  Switch,
  SwitchBtn,
  Body,
  List,
} from "../../../styles/style"
import Ipad from "../../../assets/svg/ipad.svg"
import { ExperienceFeatures } from "../../../data"

const Experience = () => {
  return (
    <Body>
      <Contain>
        <BgTitle center support>
          Immersive Event Experience{" "}
        </BgTitle>

        <Flex justifyCenter>
          <Switch>
            <Flex>
              <Link to="#1 " style={{ textDecoration: "none" }}>
                <Flex>
                  <SwitchBtn> Polls </SwitchBtn>
                  <div style={{ borderRight: "4px solid  #401364" }} />
                </Flex>
              </Link>

              <Link to="#2" style={{ textDecoration: "none" }}>
                <Flex>
                  <SwitchBtn> Feedback </SwitchBtn>
                  <div style={{ borderRight: "4px solid  #401364" }} />
                </Flex>
              </Link>

              <Link to="#3" style={{ textDecoration: "none" }}>
                <SwitchBtn> Chat </SwitchBtn>
              </Link>
            </Flex>
          </Switch>
        </Flex>
        <br />

        <Slider>
          {ExperienceFeatures.map(({ id, title, text }) => {
            return (
              <List padded key={id}>
                <Contain widthed center id={id}>
                  <Text style={{ padding: "0rem 2rem" }} small center>
                    {text}
                  </Text>
                  <img
                    alt="Experience art "
                    src={Ipad}
                    style={{ height: "auto", maxWidth: "100%" }}
                  />
                  <Title bold support>
                    {title}
                  </Title>
                </Contain>
              </List>
            )
          })}
        </Slider>
      </Contain>
    </Body>
  )
}

export default Experience
