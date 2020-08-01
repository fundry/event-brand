import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { FiMail, FiUsers, FiDatabase } from "react-icons/fi"
import styled from "styled-components"
import media from "styled-media-query"
import { CSSTransition } from "react-transition-group"

import Ecommerce from "./ecommerce"
import {
  Text,
  Hover,
  Title,
  Contain,
  Button,
  BigTitle,
  Grid,
  Items,
} from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"
import Schedule from "../../../assets/svg/schedule.svg"

const Item = styled.div`
  height: auto;
  width: auto;
  padding: 0.6rem 1rem;
  display: flex;
  transition: all 450ms;
  border: 1px solid ${props => (props.active ? "#fff" : "grey")};
  border-radius: 30px;
  margin: 0rem 1rem;
  &: hover {
    cursor: pointer;
    border: 1px solid #fff;
  }
`

const Media = () => {
  const [currentItem, setCurrentItem] = useState(1)
  const [activeView, setActiveView] = useState("cloud")

  useEffect(() => {
    setInterval(() => {
      setCurrentItem(currentItem => (currentItem > 4 ? 1 : currentItem + 1))
    }, 3000)

    return clearInterval(3000)
  }, [])
  return (
    <Contain
      style={{
        margin: "0rem 1rem",
        padding: "0",
        color: "#fff",
        borderRadius: "8px",
        background: "#2153cc",
      }}
    >
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Item active={currentItem === 1} onClick={() => setActiveView("cloud")}>
          <Hover style={{ margin: "0rem 0.4rem" }}>
            <FiDatabase style={{ fontSize: "1.4rem" }} />
          </Hover>
          Event Cloud Storage
        </Item>

        <Item active={currentItem === 2} onClick={() => setActiveView("email")}>
          <Hover style={{ margin: "0rem 0.4rem" }}>
            <FiMail style={{ fontSize: "1.4rem" }} />
          </Hover>
          Custom Event Emails
        </Item>

        <Item active={currentItem === 3} onClick={() => setActiveView("team")}>
          <Hover style={{ margin: "0rem 0.4rem" }}>
            <FiUsers style={{ fontSize: "1.4rem" }} />
          </Hover>
          Event Team Support
        </Item>
      </div>

      <br />
      <div style={{ padding: "3rem 4rem" }}>
        <CSSTransition timeout={300} in={activeView === "cloud"} unmountOnExit>
          <Grid schedule>
            <div>
              <Title> Cloud Event Storage </Title>

              <Text style={{ maxWidth: "40rem" }} white small>
                Store every file relating to your event on the Cloud using
                Oasis.
                <br /> <br /> While storing these files, you can keep them in a
                great sync with you , your event and your attendees.
              </Text>
            </div>

            <img src={Schedule} />
          </Grid>
        </CSSTransition>

        <CSSTransition timeout={300} in={activeView === "email"} unmountOnExit>
          <Grid schedule>
            <div>
              <Title> In - Event Custom Email Invitations </Title>

              <Text white small>
                Composing and Sending promotional and invitation emails for your
                event is now simplified using Oasis Email Support.
                <br /> <br /> Get started with broadcasting emails across all
                registered attendees within seconds using Pre-made invitation
                templates.
              </Text>
            </div>
            <img src={Schedule} />
          </Grid>
        </CSSTransition>

        <CSSTransition timeout={300} in={activeView === "team"} unmountOnExit>
          <Grid schedule>
            <div>
              <Title> In-Event Team Support </Title>
              <Text white small>
                Spread the workload of organizing your event using Oasis Teams
                support within the console.
                <br /> <br /> Accept Volunteers , create a team and grant them
                access to a specific part of your event console.
              </Text>
            </div>
            <img src={Schedule} />
          </Grid>
        </CSSTransition>
      </div>

      <Ecommerce />
    </Contain>
  )
}

export default Media
