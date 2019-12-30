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

const Text = styled.p``

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
          style={{ maxHeight: "50%", maxWidth: "55%", paddingTop: "1%" }}
          src={Android}
        />

        <Contain>
          <Title style={{ fontSize: "1.3em" }}> View Event Schedules </Title>
          <Text>
            {" "}
            Manage events Manage events Manage events Manage events Manage
            events Manage events Manage events Manage events Manage events
            Manage events Manage events Manage events Manage events Manage
            events Manage events
          </Text>
          <br />

          <Title style={{ fontSize: "1.3em" }}> Get Event Details </Title>
          <Text>
            {" "}
            Manage events Manage events Manage events Manage events Manage
            events Manage events Manage events Manage events Manage events
            Manage events Manage events Manage events Manage events Manage
            events Manage events
          </Text>
          <br />

          <Title style={{ fontSize: "1.3em" }}>
            {" "}
            Improve Event Networking{" "}
          </Title>
          <Text>
            {" "}
            Manage events Manage events Manage events Manage events Manage
            events Manage events Manage events Manage events Manage events
            Manage events Manage events Manage events Manage events Manage
            events Manage events
          </Text>
          <br />
        </Contain>
      </Flex>
    </Body>
  )
}

export default Attendees
