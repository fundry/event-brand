import React, { useState } from "react"
import media from "styled-media-query"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiPlay } from "react-icons/fi"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import { IoIosDesktop } from "react-icons/io"

import Header from "./header"
import Drawing from "../../assets/svg/banner.svg"

const Banner = props => {
  const Contain = styled.div`
    background: transparent;
    color: #401364;
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
    width: ${props => (props.one ? "20em" : "14em")};
    border: 2px solid #ff21c1;
    color: ${props => (props.download ? "#fff" : "#401364")};
    margin: 0 1em;
    padding: 0.25em 0.5em;
    font-size: 1.3em;
    &:hover {
      color: #401364
      background: #fff;
    }
    ${media.lessThan("medium")`
      margin: 0 0.25em;
      height:  57px;
      border: 1.7px solid #ff21c1;
      width: ${props => (props.one ? "15em" : "9em")};
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
                  <Flex justifyCenter>
                    <div style={{ paddingRight: "7px" }}>
                      <IoIosDesktop style={{ fontSize: "1.7em" }} />{" "}
                    </div>
                    Management Console
                  </Flex>
                </Btn1>
              </div>
              <br />

              <Flex>
                <Btn1 download two>
                  <Flex justifyCenter>
                    <div style={{ paddingRight: "7px" }}>
                      <DiAppstore style={{ fontSize: "1.7em" }} />{" "}
                    </div>
                    Apple Store
                  </Flex>
                </Btn1>

                <br />
                <div style={{ textAlign: "center" }}>
                  <Btn1 download three style={{ width: "15em" }}>
                    <Flex justifyCenter>
                      <div style={{ paddingRight: "7px" }}>
                        <FaGooglePlay style={{ fontSize: "1.7em" }} />{" "}
                      </div>
                      Play Store
                    </Flex>
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
