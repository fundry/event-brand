import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"
import styled from "styled-components"

import Header from "./header"
import Illustration from "../../assets/svg/illustration.svg"
import Ipad from "../../assets/svg/ipad.svg"
import Wave from "../../assets/svg/wave.svg"
import { Text, Button, CustomImage, Motto, Title } from "../../styles/style"

const Grid = styled.div`
  display:  grid; 
  grid-gap  : 1rem 1rem 
  margin : 0rem 3rem
  grid-template-columns: 60% 40%
`

const Available = styled.div`
  margin : 1rem 1rem;
  padding : 0.5rem 2rem;
  h6 {
    font-weight : normal
      border-bottom : 1px solid grey
  }
  div {
    display : flex
    border-bottom : 0px
    justify-content : space-between
  }
`

const Banner = () => {
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
    <div style={{ overflow: "hidden" }}>
      <Header style={true} />
      <br />
      {Width >= 1050 ? (
        <div>
          <Motto style={{ textAlign: "center", margin: "0.2rem  0.2em" }}>
            Launch, Manage and Organize Modern Events.
          </Motto>
          <br />
          <Title style={{ textAlign: "center" }} items>
            Redefining the regular event experience!
          </Title>

          <br />
          <br />
          <Grid>
            <CustomImage src={Ipad} alt="illustration here" />

            <div style={{ paddingRight: "20px" }}>
              <Flex column>
                <br />
                <br />

                <br />
                <Text style={{ textAlign: "right" }} items>
                  Redefining the regular event experience! Redefining the
                  regular event experience! Redefining the regular event regular
                  event experience!
                </Text>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  .
                  <Button download rounded style={{ textAlign: "right" }}>
                    <Flex justifyCenter>
                      Get Started
                      <div style={{ paddingLeft: "20px" }}>
                        <FiArrowRight style={{ fontSize: "1.6em" }} />
                      </div>
                    </Flex>
                  </Button>
                </div>

                <Available style={{ textAlign: "right" }}>
                  <h6 style={{ color: "grey" }}>AVAILABLE VIA: </h6>
                  <div>
                    <Text small>Web Console</Text>
                    <Text small>Ios Devices</Text>
                    <Text small>Android Device</Text>
                  </div>
                </Available>
              </Flex>
            </div>
          </Grid>
        </div>
      ) : (
        <Flex justifyCenter>
          <div style={{ padding: "1em" }}>
            <Motto style={{ textAlign: "center", margin: "0.5em" }}>
              Create, Manage and Organize <br /> your events.
            </Motto>

            <Text style={{ textAlign: "center", width: "50em" }} small>
              Create your conferences and let's do the management!
            </Text>
            <Flex justifyCenter>
              <Flex column>
                <br />
                <Flex>
                  <div style={{ fontWeight: "bold" }}>
                    <Button download two>
                      <Flex justifyCenter>
                        <div style={{ paddingRight: "7px" }}>
                          <DiAppstore style={{ fontSize: "1.7em" }} />
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
                          <FaGooglePlay style={{ fontSize: "1.5em" }} />
                        </div>
                        Play Store
                      </Flex>
                    </Button>
                  </div>
                </Flex>
                <br />
                <Text center small>
                  Try a demo of the
                  <a
                    target="_blank"
                    style={{
                      padding: "0rem 0.5rem",
                      textDecoration: "underline",
                      color: "#401364",
                      fontWeight: "bold",
                    }}
                    href="https://event-console.netlify.app/"
                  >
                    Oasis Event Management
                  </a>
                  Console
                </Text>
                <p style={{ textAlign: "center", color: "grey" }}>
                  *No Account Required
                </p>
              </Flex>
            </Flex>
          </div>
        </Flex>
      )}
      <img alt="Wave design" src={Wave} />
    </div>
  )
}

export default Banner
