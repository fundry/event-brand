import React, { useState, useEffect } from "react"
import media from "styled-media-query"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiPlay } from "react-icons/fi"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import { IoIosDesktop } from "react-icons/io"

import Header from "./header"
import Illustration from "../../assets/svg/illustration.svg"

const Banner = props => {
  const Contain = styled.div`
    background: transparent;
    color: #401364;
    padding-left: 12em;
    padding-right: 12em;
    ${media.lessThan("large")`
    padding-left: 4em;
    padding-right: 4em;
    `};
  `

  const Motto = styled.h1`
    ${media.lessThan("medium")`
    font-size: 2.5em
  `};
    font-weight: bold;
  `

  const Body = styled.div`
    padding-top: 4em;
    ${media.lessThan("large")`
      padding-top: 2em;
  `};
  `

  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 500)

  const handleResize = value => {
    setWidth(value)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize.bind(this))
    return () => window.removeEventListener("resize", handleResize.bind(this))
  }, [])

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
    <div>
      <Header />

      {Width >= 1050 ? (
        <Contain>
          <Flex justifyAround>
            <img
              src={Illustration}
              alt="illustration here"
              style={{ maxHeight: "40%", maxWidth: "50%" }}
            />

            <Body>
              <Flex column>
                <br />
                <br />
                <Motto style={{ textAlign: "right", margin: "0.5em" }}>
                  Create, Manage and Organize <br /> your events.
                </Motto>

                <Text style={{ textAlign: "right" }}>
                  Create your conferences and let's do the management!{" "}
                </Text>
                <div style={{ textAlign: "right" }}>
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
                    <div style={{ fontWeight: "bold" }}>
                      <Btn1 download two>
                        <Flex justifyCenter>
                          <div style={{ paddingRight: "7px" }}>
                            <DiAppstore style={{ fontSize: "1.7em" }} />{" "}
                          </div>
                          Apple Store
                        </Flex>
                      </Btn1>
                    </div>
                    <br />
                    <div style={{ textAlign: "center", fontWeight: "bold" }}>
                      <Btn1 download two style={{ width: "13em" }}>
                        <Flex justifyCenter>
                          <div style={{ paddingRight: "7px" }}>
                            <FaGooglePlay style={{ fontSize: "1.7em" }} />{" "}
                          </div>
                          Play Store
                        </Flex>
                      </Btn1>
                    </div>
                  </Flex>
                </div>
              </Flex>
            </Body>
          </Flex>

          <br />
          <br />
        </Contain>
      ) : (
        <Flex justifyCenter>
          <div style={{ padding: "2em" }}>
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
                  <div style={{ fontWeight: "bold" }}>
                    <Btn1 download two>
                      <Flex justifyCenter>
                        <div style={{ paddingRight: "7px" }}>
                          <DiAppstore style={{ fontSize: "1.7em" }} />{" "}
                        </div>
                        Apple Store
                      </Flex>
                    </Btn1>
                  </div>
                  <br />
                  <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    <Btn1 download two style={{ width: "13em" }}>
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
      )}
    </div>
  )
}

export default Banner
