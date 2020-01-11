import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import Ipad from "../../../assets/svg/ipad.svg"
import Feature from "../../../assets/svg/features.svg"

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h4`
  color: blue;
`

const Contain = styled.div`
  padding: 0.5em;
`

const Text = styled.p`
  font-size: 1.1em;
`

const data = [
  {
    id: 1,
    title: "Create Awesome talks",
    text:
      "All images taken during an event are sent to registered event attendees.",
  },
  {
    id: 2,
    title: "Use premade templates",
    text:
      "All images taken during an event are sent to registered event attendees.",
  },
  {
    id: 3,
    title: "Review your talks",
    text:
      "All images taken during an event are sent to registered event attendees.",
  },
]

const Speakers = () => {
  return (
    <Body>
      <Title style={{ textAlign: "right", paddingLeft: "10px" }}>
        {" "}
        Event for Speakers{" "}
      </Title>

      <Flex justifyCenter>
        <img
          alt="ipad"
          style={{ maxHeight: "40%", maxWidth: "45%", paddingTop: "1%" }}
          src={Ipad}
        />
      </Flex>

      <Flex justifyBetween>
        {data.map(({ title, id, text }) => {
          return (
            <div>
              <Contain key={id}>
                <Flex justifyCenter>
                  <img
                    src={Feature}
                    alt="feature"
                    style={{
                      maxHeight: "50%",
                      maxWidth: "70%",
                      padding: "1em",
                    }}
                  />
                </Flex>
                <div style={{ textAlign: "center" }}>
                  <Title>{title}</Title>

                  <Text>{text}</Text>
                </div>
              </Contain>
            </div>
          )
        })}
      </Flex>
      <br />
    </Body>
  )
}

export default Speakers
