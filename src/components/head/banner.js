import React, { useState } from "react"
import media from "styled-media-query"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiPlay } from "react-icons/fi"

import Header from "./header"
import Drawing from "../../assets/svg/banner.svg"

const Banner = props => {
  const Contain = styled.div`
    background: #6c3eef;
  `

  const Motto = styled.h2`
    ${media.lessThan("medium")`
    font-size: 1.8em
  `};
    font-weight: bold;
  `

  const Body = styled.div`
    height: 30vh;
    padding-top: 7em;
    ${media.lessThan("medium")`
      height: 23vh;
      padding-top: 4em;
  `};
  `

  const [Width, setWidth] = useState(null)
  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)
  const { auth } = props

  const Btn1 = styled.button`
    background: transparent;
    text-align: center;
    border-radius: 5px;
    height: 48px;
    width: 14em;
    border: 2px solid #ff21c1;
    color: #401364;
    margin: 0 1em;
    padding: 0.25em 1.5em;
    font-size: 1.2em;
    &:hover {
      color: #401364
      background: #fff;
    }
    ${media.lessThan("medium")`
      margin: 0 0.25em;
  `};
  `

  const Text = styled.p`
    font-size: 1.2em;
  `

  return (
    <Contain>
      <Header auth={auth} />

      <Flex justifyCenter>
        <div style={{ color: "#fff", padding: "2em" }}>
          <br />
          <br />
          <h5 style={{ textAlign: "center", wordSpacing: "10px" }}>
            {" "}
            EVENTFUL{" "}
          </h5>
          <Motto style={{ textAlign: "center", margin: "0.5em" }}>
            Create, Manage and Organize your events.{" "}
          </Motto>

          <Text style={{ textAlign: "center", width: "50em", color: "#fff" }}>
            Create your conferences and let's do the management!{" "}
          </Text>
          <Flex justifyCenter>
            <Flex justifyAround>
              <Btn1>Get Started</Btn1>
            </Flex>
          </Flex>
        </div>
      </Flex>

      <br />
    </Contain>
  )
}

export default Banner
