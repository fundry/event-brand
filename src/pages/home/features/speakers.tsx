import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-compoent"

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h4`
  color: blue;
`

const Speakers = () => {
  return (
    <Body>
      <Title style={{ textAlign: "right", paddingLeft: "10px" }}>
        {" "}
        Event for Speakers{" "}
      </Title>
    </Body>
  )
}

export default Speakers
