import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import Android from "../../../assets/svg/android.svg"

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h3`
  color: blue;
`

const Contain = styled.div`
  padding: 0.5em;
`

const Attendees = () => {
  return (
    <Body>
      <Title style={{ textAlign: "left", paddingLeft: "10px" }}>
        {" "}
        Event for Attendee s{" "}
      </Title>

      <Flex justifyAround>
        <Contain>
          <img
            alt="android"
            style={{ maxHeight: "70%", maxWidth: "75%", paddingTop: "1%" }}
            src={Anderoid}
          />

          <Title style={{ fontSize: "1.1em" }}> View Event Schedules </Title>
          <Title style={{ fontSize: "1.1em" }}> Get Event Details </Title>
          <Title style={{ fontSize: "1.1em" }}>
            {" "}
            Improve Event Networking{" "}
          </Title>
        </Contain>
      </Flex>
    </Body>
  )
}

export default Attendees
