import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-compoent"

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h3`
  color: #OB33A2;
`

const Attendees = () => {
  return (
    <Body>
      <Title style={{ textAlign: "left", paddingLeft: "10px" }}>
        {" "}
        Event for Attendee s{" "}
      </Title>
    </Body>
  )
}

export default Attendees
