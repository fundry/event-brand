import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import { IoIosAlarm, IoIosDesktop, IoIosPhonePortrait } from "react-icons/io"
import styled from "styled-components"
import { FiImage, FiCalendar, FiMonitor, FiPhone } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"

import Iphone from "../../../assets/svg/iphone.svg"
import {
  Text,
  Contain,
  Title,
  CustomButton,
  HeadTitle,
} from "../../../styles/style"
import media from "styled-media-query"

// Using alot of vars for CSS inorder to make them responsive

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
    padding : 1rem 0rem
  }
    `};
};
`

const Circle = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  border: 1px solid #f84e06;
  display: flex;
  padding: 1rem 0.5rem;
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
`

const TypeCircle = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid ${props => props.background};
  background: ${props => props.background};
  border-radius: 50%;
  margin: 0.6rem 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  ${media.lessThan("large")`
  margin: 1.7rem 0.5rem;
  height: 60px;
  width: 60px;
`};
`

const Divider = styled.div`
  height: 12vh;
  width: 0rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  border-right: 5px dashed #401364;
`

const Button = styled(CustomButton)`
  width: 10rem;
  padding: 0.3rem 0.3rem;
  border-radius: 3px;
  background: ${(props: { background: any }) => props.background};
  border: ${(props: { background: any }) => props.background};
  font-size: 1rem;
  &: hover {
    width: 11rem;
  }
`

const Switches = styled.div`
  ${media.lessThan("large")`
      display : none;
    `}
`

const Description = styled.div`
  margin-left: 3rem;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  ${media.lessThan("large")`
  margin-left: 0rem;
`}
`

const Body = styled.div`
  padding: 1rem 4rem;
  ${media.lessThan("large")`
    padding: 1rem 1rem;
  `};
`

const Users = styled.div`
  margin: 0.5rem 0rem;
  display: flex;
  justify-content: center;
  ${media.lessThan("small")`  
  display : none;
`}
`

const App = () => {
  const [ActiveColumn, setActiveColumn] = useState("first")

  return (
    <Body>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HeadTitle center style={{ textAlign: "center", margin: "0rem 1rem" }}>
          Oasis is a Media Tool.
          <span
            style={{
              margin: "0rem 0.5rem",
              color: "#F84E06",
              fontWeight: "bold",
            }}
          >
            Wield It!{" "}
          </span>{" "}
        </HeadTitle>
      </div>

      <Users>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", margin: "0rem 0.7rem" }}>
            <div>
              <TypeCircle background="violet">
                {" "}
                <IoIosDesktop style={{ fontSize: "1.8rem" }} />
              </TypeCircle>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ margin: "2rem 1rem" }}>
                For <b> Event Organizers </b>{" "}
              </Text>
            </div>
          </div>

          <div style={{ display: "flex", margin: "0rem 0.7rem" }}>
            <div>
              <TypeCircle background="#f84e06">
                {" "}
                <IoIosDesktop style={{ fontSize: "1.8rem" }} />{" "}
              </TypeCircle>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>
                {" "}
                For <b> Event Speakers </b>{" "}
              </Text>
            </div>
          </div>

          <div style={{ display: "flex", margin: "0rem 0.7rem" }}>
            <div>
              <TypeCircle background="#22263d">
                {" "}
                <IoIosPhonePortrait style={{ fontSize: "1.8rem" }} />{" "}
              </TypeCircle>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>
                {" "}
                For <b> Event Attendees </b>{" "}
              </Text>
            </div>
          </div>
        </div>
      </Users>
      <br />

      <Grid>
        <Switches>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Circle
              onClick={() => {
                setActiveColumn("first")
              }}
              active={ActiveColumn === "first"}
            >
              <FiCalendar style={{ fontSize: "1.7rem" }} />{" "}
            </Circle>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Circle
              onClick={() => {
                setActiveColumn("second")
              }}
              active={ActiveColumn === "second"}
            >
              <IoIosAlarm style={{ fontSize: "1.7rem" }} />{" "}
            </Circle>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Circle
              onClick={() => {
                setActiveColumn("third")
              }}
              active={ActiveColumn === "third"}
            >
              <FiImage style={{ fontSize: "1.7rem" }} />{" "}
            </Circle>
          </div>
        </Switches>

        <Description>
          <CSSTransition
            in={ActiveColumn === "first"}
            timeout={300}
            unmountOnExit
          >
            <div>
              <Title center> Mobile Event Schedules Sync </Title>
              <Text small center>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate eligendi quisquam quam impedit, reiciendis
                ex eveniet ad dicta assumenda, ratione veniam saepe. Quos
                officiis ab eum, nobis atque perferendis.
              </Text>
            </div>
          </CSSTransition>

          <CSSTransition
            in={ActiveColumn === "second"}
            timeout={300}
            unmountOnExit
          >
            <div>
              <Title center> Mobile Event Alarms</Title>
              <Text small center>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate eligendi quisquam quam impedit, reiciendis
                ex eveniet ad dicta assumenda, ratione veniam saepe. Quos
                officiis ab eum, nobis atque perferendis.
              </Text>
            </div>
          </CSSTransition>

          <CSSTransition
            in={ActiveColumn === "third"}
            timeout={300}
            unmountOnExit
          >
            <div>
              <Title center> Mobile Event Media Assets </Title>
              <Text small center>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate eligendi quisquam quam impedit, reiciendis
                ex eveniet ad dicta assumenda, ratione veniam saepe. Quos
                officiis ab eum, nobis atque perferendis.
              </Text>
            </div>
          </CSSTransition>
        </Description>

        <div>
          <Flex justifyCenter>
            <img
              alt="android"
              style={{ maxHeight: "30%", maxWidth: "46%" }}
              src={Iphone}
            />
          </Flex>
          <br />
          <br />
          <Contain>
            <Title center>Get the App! </Title>
            <br />

            <div style={{ display: "flex ", justifyContent: "center" }}>
              <Button background="#401364" style={{ margin: "0rem 2rem" }}>
                <div style={{ margin: "0rem 0.7rem" }}>
                  <DiAppstore style={{ fontSize: "1.5em" }} />
                </div>
                Apple Store
              </Button>

              <Button>
                <div style={{ margin: "0rem 0.7rem" }}>
                  <FaGooglePlay style={{ fontSize: "1.4em" }} />{" "}
                </div>
                Play Store
              </Button>
            </div>
          </Contain>
        </div>
      </Grid>
      <br />
    </Body>
  )
}

export default App
