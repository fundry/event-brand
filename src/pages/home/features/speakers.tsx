import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import Ipad from "../../../assets/svg/ipad.svg"

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h3`
  color: blue;
`

const Contain = styled.div`
  padding: 0.5em;
`

const Speakers = () => {
  return (
    <Body>
      <Title style={{ textAlign: "right", paddingLeft: "10px" }}>
        {" "}
        Event for Speakers{" "}
      </Title>

      <Flex justifyAround>
        <img
          alt="ipad"
          style={{ maxHeight: "70%", maxWidth: "75%", paddingTop: "1%" }}
          src={Ipad}
        />

        <Contain>
          <Title style={{ fontSize: "1.2em" }}>Create Awesome talks</Title>

          <Title style={{ fontSize: "1.2em" }}>
            {" "}
            Get Instant review on talk drafts
          </Title>
          <Title style={{ fontSize: "1.2em" }}>
            {" "}
            Use premade templates and animations{" "}
          </Title>
        </Contain>
      </Flex>
    </Body>
  )
}

export default Speakers
