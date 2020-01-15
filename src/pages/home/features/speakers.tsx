import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import Ipad from "../../../assets/svg/ipad.svg"
import Feature from "../../../assets/svg/features.svg"

import { Title, Body, Text } from "../../../styles/style"

const Contain = styled.div`
  padding: 0.5em;
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
  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const handleResize = value => {
    setWidth(value)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize.bind(this))
    return () => window.removeEventListener("resize", handleResize.bind(this))
  }, [])

  return (
    <Body>
      <Title style={{ textAlign: "right", paddingLeft: "10px" }}>
        Event for Speakers{" "}
      </Title>

      <Flex justifyCenter>
        <img
          alt="ipad"
          style={{ maxWidth: Width >= 700 ? "55%" : "77%" }}
          src={Ipad}
        />
      </Flex>

      {Width >= 570 ? (
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
      ) : (
        <Flex column>
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
      )}
      <br />
    </Body>
  )
}

export default Speakers
