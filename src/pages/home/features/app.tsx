import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import { IoIosAlarm } from "react-icons/io"
import styled from "styled-components"
import { FiArchive, FiImage } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"

import Iphone from "../../../assets/svg/iphone.svg"
import {
  Text,
  Contain,
  Title,
  CustomButton,
  HeadTitle,
} from "../../../styles/style"

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-columns: 5rem auto 25rem; 
};
`

const Circle = styled.div`
  height: 60px;
  width: 60px;
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
  font-size: 1.05rem;
  &: hover {
    width: 11rem;
  }
`

const App = () => {
  const [ActiveColumn, setActiveColumn] = useState("first")
  const [Number, setNumber] = useState(0)

  // const increase = () => {
  //   let no = 0
  //   no++
  //   window.requestAnimationFrame(increase)
  //   setNumber(no)
  //   console.log(no)
  // }

  // useEffect(() => {
  //   increase()
  // }, [])

  // TODO: HAVENT DONE SLIDING ANIMATION
  // const animate = () => {
  //   window.requestAnimationFrame(animate)
  //   return width
  // }
  // animate()

  return (
    <div style={{ padding: "1rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HeadTitle center style={{ margin: "0rem 1rem" }}>
          Oasis is a Tool.{" "}
          <span style={{ color: "#F84E06", fontWeight: "bold" }}>
            Wield It!{" "}
          </span>{" "}
        </HeadTitle>
      </div>
      <Grid>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Circle
              onClick={() => {
                setActiveColumn("first")
              }}
              active={ActiveColumn === "first"}
            >
              <FiArchive style={{ fontSize: "1.7rem" }} />{" "}
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
        </div>

        <div
          style={{
            marginLeft: "3rem",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Title center> Some App Feature title </Title>
          <Text small center>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            cupiditate eligendi quisquam quam impedit, reiciendis ex eveniet ad
            dicta assumenda, ratione veniam saepe. Quos officiis ab eum, nobis
            atque perferendis.
          </Text>
        </div>

        <div>
          <Flex justifyCenter>
            <img
              alt="android"
              style={{ maxHeight: "25%", maxWidth: "40%", paddingTop: "1%" }}
              src={Iphone}
            />
          </Flex>
          <br />
          <br />
          <Contain>
            <Title center>Get the App! </Title>
            <br />

            <div style={{ display: "flex ", justifyContent: "center" }}>
              <Button style={{ margin: "0rem 2rem" }}>
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
    </div>
  )
}

export default App
