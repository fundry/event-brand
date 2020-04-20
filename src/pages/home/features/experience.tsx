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
} from "../../../styles/style"
import Ipad from "../../../assets/svg/ipad.svg"

// TODO:  this component should be a slider later on

const Experience = () => {
  return (
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
        <li>
          <Contain widthed center id="1">
            <Text style={{ padding: "0rem 2rem" }} small center>
              Some text about the exprience category of the event the exprience
              category of the event the exprience category of the event the
            </Text>
            <img
              alt="Experience art "
              src={Ipad}
              style={{ height: "auto", maxWidth: "100%" }}
            />
            <Title support> Create Realtime Polls </Title>
          </Contain>
        </li>
        <li>
          <Contain center id="2" widthed>
            <Text style={{ padding: "0rem 2rem" }} small center>
              Some text about the exprience category of the event the exprience
              category of the event the exprience category of the event the
            </Text>
            <img
              alt="Experience art "
              src={Ipad}
              style={{ height: "auto", maxWidth: "97%" }}
            />
            <Title support> Create Realtime Polls </Title>
          </Contain>
        </li>
        <li>
          <Contain center id="3" widthed>
            <Text style={{ padding: "0rem 2rem" }} small center>
              Some text about the exprience category of the event the exprience
              category of the event the exprience category of the event the
            </Text>
            <img
              alt="Experience art "
              src={Ipad}
              style={{ height: "auto", maxWidth: "97%" }}
            />
            <Title support> Create Realtime Polls </Title>
          </Contain>
        </li>
      </Slider>
    </Contain>
  )
}

export default Experience
