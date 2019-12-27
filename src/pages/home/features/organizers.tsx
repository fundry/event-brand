import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-compoent"

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h3`
  color: #OB33A2;
`

const Organizers = () => {
  return (
    <Body>
      <Title style={{ textAlign: "left", paddingLeft: "10px" }}>
        {" "}
        Event for Organizers{" "}
      </Title>
    </Body>
  )
}

export default Organizers
