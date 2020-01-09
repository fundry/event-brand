import React, { useState } from "react"
import media from "styled-media-query"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiPlay } from "react-icons/fi"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"

import Header from "./header"
import Drawing from "../../assets/svg/banner.svg"

const Banner = props => {
  const Contain = styled.div`
    background: transparent;
  `

  const Motto = styled.h1`
    ${media.lessThan("medium")`
    font-size: 2.5em
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
    background: ${props => (props.download ? "#ff21c1" : "transparent")};
    text-align: center;
    border-radius: 5px;
    height:  60px;
    width: ${props => (props.one ? "20em" : "17em")};
    border: 2px solid #ff21c1;
    color: ${props => (props.download ? "#fff" : "#401364")};
    margin: 0 1em;
    padding: 0.25em 1.5em;
    font-size: 1.3em;
    &:hover {
      color: #401364
      background: #fff;
    }
    ${media.lessThan("medium")`
      margin: 0 0.25em;
  `};
  `

  const Text = styled.p`
    font-size: 1.5em;
  `

  return (
    <Contain>
      <Header auth={auth} />

      <Flex justifyCenter>
        <div style={{ padding: "2em" }}>
          <br />
          <br />
          <br />
          <Motto style={{ textAlign: "center", margin: "0.5em" }}>
            Create, Manage and Organize <br /> your events.{" "}
          </Motto>

          <Text style={{ textAlign: "center", width: "50em" }}>
            Create your conferences and let's do the management!{" "}
          </Text>
          <Flex justifyCenter>
            <Flex column>
              <div style={{ textAlign: "center" }}>
                <Btn1 style={{ textAlign: "center" }} one>
                  Web Management Console
                </Btn1>
              </div>
              <br />

              <Flex>
                <Btn1 download two>
                  <Flex>
                    <DiAppstore style={{ fontSize: "1.7em" }} />
                  </Flex>
                  Apple Store
                </Btn1>

                <br />
                <div style={{ textAlign: "center" }}>
                  <Btn1 download three style={{ width: "15em" }}>
                    <Flex>
                      <FaGooglePlay style={{ fontSize: "1.7em" }} />
                    </Flex>
                    Play Store
                  </Btn1>
                </div>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Flex>

      <br />
      <br />
    </Contain>
  )
}

export default Banner
