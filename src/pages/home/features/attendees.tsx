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
        Event for Attendees{" "}
      </Title>

      <Flex justifyBetween>
        <img
          alt="android"
          style={{ maxHeight: "60%", maxWidth: "65%", paddingTop: "1%" }}
          src={Android}
        />

        <Contain>
          <Title style={{ fontSize: "1.2em" }}> View Event Schedules </Title>
          <Title style={{ fontSize: "1.2em" }}> Get Event Details </Title>
          <Title style={{ fontSize: "1.2em" }}>
            {" "}
            Improve Event Networking{" "}
          </Title>
        </Contain>
      </Flex>
    </Body>
  )
}

export default Attendees
