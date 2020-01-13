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
import { Text, Button, Body, Motto, BigTitle } from "../../styles/style"

const Banner = props => {
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

  return (
    <div>
      <Header />

      {Width >= 1050 ? (
        <Body>
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

                <Text style={{ textAlign: "right" }} items>
                  Create your conferences and let's do the management!{" "}
                </Text>
                <div style={{ textAlign: "right" }}>
                  <div style={{ textAlign: "center" }}>
                    <Button style={{ textAlign: "center" }} one>
                      <Flex justifyCenter>
                        <div style={{ paddingRight: "7px" }}>
                          <IoIosDesktop style={{ fontSize: "1.7em" }} />{" "}
                        </div>
                        Management Console
                      </Flex>
                    </Button>
                  </div>
                  <br />

                  <Flex>
                    <div style={{ fontWeight: "bold" }}>
                      <Button download two>
                        <Flex justifyCenter>
                          <div style={{ paddingRight: "7px" }}>
                            <DiAppstore style={{ fontSize: "1.7em" }} />{" "}
                          </div>
                          Apple Store
                        </Flex>
                      </Button>
                    </div>
                    <br />
                    <div style={{ textAlign: "center", fontWeight: "bold" }}>
                      <Button download two style={{ width: "13em" }}>
                        <Flex justifyCenter>
                          <div style={{ paddingRight: "7px" }}>
                            <FaGooglePlay style={{ fontSize: "1.7em" }} />{" "}
                          </div>
                          Play Store
                        </Flex>
                      </Button>
                    </div>
                  </Flex>
                </div>
              </Flex>
            </Body>
          </Flex>

          <br />
          <br />
        </Body>
      ) : (
        <Flex justifyCenter>
          <div style={{ padding: "2em" }}>
            <Motto style={{ textAlign: "center", margin: "0.5em" }}>
              Create, Manage and Organize <br /> your events.{" "}
            </Motto>

            <Text style={{ textAlign: "center", width: "50em" }} items>
              Create your conferences and let's do the management!{" "}
            </Text>
            <Flex justifyCenter>
              <Flex column>
                <div style={{ textAlign: "center" }}>
                  <Button style={{ textAlign: "center" }} one>
                    <Flex justifyCenter>
                      <div style={{ paddingRight: "7px" }}>
                        <IoIosDesktop style={{ fontSize: "1.7em" }} />{" "}
                      </div>
                      Management Console
                    </Flex>
                  </Button>
                </div>
                <br />

                <Flex>
                  <div style={{ fontWeight: "bold" }}>
                    <Button download two>
                      <Flex justifyCenter>
                        <div style={{ paddingRight: "7px" }}>
                          <DiAppstore style={{ fontSize: "1.7em" }} />{" "}
                        </div>
                        Apple Store
                      </Flex>
                    </Button>
                  </div>
                  <br />
                  <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    <Button
                      download
                      two
                      style={{ width: "11em", marginLeft: "1em" }}
                    >
                      <Flex justifyCenter>
                        <div style={{ paddingRight: "7px" }}>
                          <FaGooglePlay style={{ fontSize: "1.7em" }} />{" "}
                        </div>
                        Play Store
                      </Flex>
                    </Button>
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
