import React, { useState, useEffect } from "react"
import { FiArrowRight } from "react-icons/fi"
import Flex from "styled-flex-component"
import styled from "styled-components"

import Illustration from "../../assets/svg/illustration.svg"
import {
  Text,
  CustomImage,
  Motto,
  CustomButton as Button,
} from "../../styles/style"

const Texts = styled(Text)`
  font-size: 1.45rem;
  font-weight: 400;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem 2rem;
  grid-template-columns: 40% 60%;
  img {
    margin-left: 1rem;
    width: 700px;
    height: 700px;
  }
  div {
    margin-top: 3rem;
  }
`

const LargeBanner = () => {
  const [currentText, setText] = useState<string>("Events")
  const [time, setTime] = useState<number>(300)
  const [currentItem, setCurrentItem] = useState<number>(0)

  const words = ["Events", "Communities", "Talk Drafts"]

  useEffect(() => {
    setText(words[currentItem])
  }, [currentItem])

  return (
    <Grid>
      <img src={Illustration} alt="illustration here" />

      <div style={{ textAlign: "right", width: "45rem", margin: "1rem  0em" }}>
        <br />
        <br />
        <br />
        <Motto style={{ textAlign: "center" }}>
          Launch, Plan, and Manage your <br />{" "}
          <span style={{ color: "#F84E06" }}> {currentText}.</span>
        </Motto>
        <br />

        <div style={{ textAlign: "center" }}>
          <Texts style={{ textAlign: "center" }}>
            {" "}
            Planning an event Today ?{" "}
          </Texts>
          <Texts style={{ textAlign: "center" }}>
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
                <FiArrowRight style={{ fontSize: "1.6em" }} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default LargeBanner
