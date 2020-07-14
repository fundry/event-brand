import React, { useState, useEffect } from "react"
import { FiArrowRight } from "react-icons/fi"
import styled from "styled-components"

import Illustration from "../../assets/svg/illustration.svg"
import StreamsIllustration from "../../assets/svg/banner-anim.svg"
import { Text, Motto, CustomButton as Button } from "../../styles/style"

const Texts = styled(Text)`
  font-size: 1.3rem;
  font-weight: 400;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem 1rem;
  grid-template-columns: 40% 60%;
  img {
    margin-left: 1rem;
    width: 750px;
    height: 700px;
    transition: all 400ms;
  }
  div {
    margin-top: 1rem;
  }
`

const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: violet;
`

const LargeBanner = () => {
  const [currentText, setText] = useState<string>("Events")
  const [time, setTime] = useState<number>(300)
  const [currentItem, setCurrentItem] = useState<number>(0)
  const [Colour, setColour] = useState<string>("#9EE9DF")
  const [TextColour, setTextColour] = useState<string>("#401364")
  const [Animation, showAnimation] = useState(false)

  const words = ["Streams", "Events", "Communities", "Talk Drafts"]

  useEffect(() => {
    setText(words[currentItem])
  }, [currentItem])

  setTimeout(() => {
    setText(words[1])
    setColour("#22263d")
    setTextColour("#fff")
    showAnimation(true)
  }, 1000)

  // setTimeout(() => {
  //   setColour("indigo")
  // }, 2000)

  return (
    <div style={{ transition: "all 600ms", background: Colour }}>
      <Grid>
        <img
          src={!Animation ? Illustration : StreamsIllustration}
          alt="illustration here"
        />

        <div
          style={{ textAlign: "right", width: "45rem", margin: "1rem  0em" }}
        >
          <br />
          <br />
          <br />
          <br />
          <Motto style={{ textAlign: "center" }}>
            <span style={{ color: TextColour }}>
              Launch, Plan, and Manage your{" "}
            </span>{" "}
            <br />{" "}
            <span
              style={{
                color: "#F84E06",
                padding: "0.3rem 1.5rem",
                background: Animation ? "#401364d4" : "transparemt",
                borderBottom: "5px solid #F84E06",
              }}
            >
              {" "}
              {currentText}.
            </span>
          </Motto>
          <br />

          <div style={{ textAlign: "center" }}>
            <Texts style={{ color: TextColour, textAlign: "center" }}>
              Planning an event Today ?
            </Texts>

            <Texts style={{ color: TextColour, textAlign: "center" }}>
              Leverage tools built within Oasis to redefine the regular event
              experience for your event team and your attendees !
            </Texts>

            <div
              style={{
                marginTop: "0rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => {
                  currentItem + 1
                }}
                style={{ textAlign: "center" }}
              >
                Launch An Event
                <div style={{ paddingLeft: "20px", marginTop: "0rem" }}>
                  <FiArrowRight style={{ fontSize: "1.6rem" }} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Grid>
      <div style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", background: "transparent", width: "100%" }}
        >
          <path
            d="M-6.06,-2.19 C128.81,88.36 378.81,75.70 500.70,-2.19 L508.47,168.19 L-2.25,163.33 Z"
            style={{ stroke: "none", fill: "#f2f5ff" }}
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default LargeBanner
