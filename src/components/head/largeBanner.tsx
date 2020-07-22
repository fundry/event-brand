import React, { useState, useEffect } from "react"
import { FiArrowRight } from "react-icons/fi"
import styled, { keyframes } from "styled-components"

import Illustration from "../../assets/svg/illustration.svg"
import StreamsIllustration from "../../assets/svg/banner-anim.svg"
import { Text, Motto, CustomButton as Button } from "../../styles/style"
import media from "styled-media-query"

const Texts = styled(Text)`
  font-size: 1.3rem;
  font-weight: 400;
`

const Bouncer = keyframes`
  from {
    height: 650px;
  }
  to {
    height: 630px;
  }
`

const SmallBouncer = keyframes`
  from {
    height: 350px;
  }
  to {
    height: 330px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem 1rem;
  grid-template-columns: 40% 60%;
  img {
    // animation: ${Bouncer} 2500ms ease-in-out 0s infinite;
    margin-left: 1rem;
    width: 800px;
    height: 600px;
    transition: all 400ms;
  }
  div {
    margin-top: 3rem;
    text-align: right;
    width: 45rem;
  }
  ${media.lessThan("huge")`
  margin-top: 1rem;
  text-align: right;
   width: 45rem;
   margin: 1rem  0em;
  `};
  ${media.lessThan("large")`
    display : flex;
    flex-direction : column;
     align-items  : center;
     margin-left : 5rem;
     justify-content : center;
    img {
      // animation : ${SmallBouncer} 2500ms ease-in-out 0s infinite;
      width: 400px;
      height: 400px;
      transition: all 400ms;
    }
    div {
    text-align: center;

      margin-top: 0rem;
       width: auto;
       margin: 0rem  0em;
    }
  `};
  ${media.lessThan("small")`
  
  `};
`

const LargeBanner = () => {
  const words = ["Streams", "Events", "Communities", "Talk Drafts"]
  const colors = ["#690579", "#22263d", "indigo", "#401364"]

  const [currentItem, setCurrentItem] = useState<number>(0)
  const [TextColour, setTextColour] = useState<string>("#22263d")
  const [Animation, showAnimation] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setCurrentItem(currentItem => (currentItem > 2 ? 0 : currentItem + 1))
    }, 3500)

    return clearInterval(3500)
  }, [])

  setTimeout(() => {
    showAnimation(true)
  }, 1000)

  return (
    <div style={{ transition: "all 600ms" }}>
      <Grid>
        <img
          src={!Animation ? Illustration : StreamsIllustration}
          alt="illustration here"
        />

        <div>
          <Motto style={{ textAlign: "center" }}>
            <span style={{ color: TextColour }}>
              Launch, Plan, and Manage your{" "}
            </span>{" "}
            <br />{" "}
            <span
              style={{
                color: "#F84E06",
                padding: "0.3rem 1.5rem",
                background: Animation ? "#401364d4" : "transparent",
                borderBottom: "5px solid #F84E06",
              }}
            >
              {" "}
              {words[currentItem]}.
            </span>
          </Motto>

          <div style={{ textAlign: "center" }}>
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
                <FiArrowRight style={{ fontSize: "1.6rem" }} />
              </Button>
            </div>
          </div>
        </div>
      </Grid>
      {/* <div style={{ height: "150px", overflow: "hidden" }}>
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
      </div> */}
    </div>
  )
}

export default LargeBanner
