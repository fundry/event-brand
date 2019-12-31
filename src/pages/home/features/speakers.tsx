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

const Text = styled.p``

const Speakers = () => {
  return (
    <Body>
      <Title style={{ textAlign: "right", paddingLeft: "10px" }}>
        {" "}
        Event for Speakers{" "}
      </Title>

      <Flex justifyBetween>
        <img
          alt="ipad"
          style={{ maxHeight: "40%", maxWidth: "45%", paddingTop: "1%" }}
          src={Ipad}
        />

        <Contain>
          <Title style={{ fontSize: "1.3em" }}>Create Awesome talks</Title>
          <Text>
            {" "}
            Manage events Manage events Manage events Manage events Manage
            events Manage events Manage events Manage events Manage events
          </Text>
          <br />

          <Title style={{ fontSize: "1.3em" }}>
            {" "}
            Get Instant review on talk drafts
          </Title>
          <Text>
            {" "}
            Manage events Manage events Manage events Manage events Manage
            events Manage events Manage events Manage events Manage events
          </Text>
          <br />

          <Title style={{ fontSize: "1.3em" }}>
            {" "}
            Use premade templates and animations{" "}
          </Title>
          <Text>
            {" "}
            Manage events Manage events Manage events Manage events Manage
            events Manage events Manage events Manage events Manage events
          </Text>
          <br />
        </Contain>
      </Flex>
    </Body>
  )
}

export default Speakers
