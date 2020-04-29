import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"

import Header from "./header"
import Illustration from "../../assets/svg/illustration.svg"
import { Text, Button, CustomImage, Motto } from "../../styles/style"

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
      <br />
      <br />
      {Width >= 1050 ? (
        <div>
          <Flex justifyAround>
            <CustomImage src={Illustration} alt="illustration here" />

            <div style={{ paddingRight: "20px" }}>
              <Flex column>
                <br />
                <br />
                <br />
                <br />
                <Motto style={{ textAlign: "center", margin: "1rem  0.2em" }}>
                  Create, Manage and Organize <br /> your events.
                </Motto>

                <Text style={{ textAlign: "center" }} items>
                  Redefining the regular event experience!
                </Text>
                <Flex justifyCenter>
                  <Button one download rounded style={{ textAlign: "center" }}>
                    <Flex justifyCenter>
                      Get Started
                      <div style={{ paddingLeft: "20px" }}>
                        <FiArrowRight style={{ fontSize: "1.6em" }} />
                      </div>
                    </Flex>
                  </Button>
                </Flex>
              </Flex>
            </div>
          </Flex>
          <br />
          <Text center small>
            Try a demo of the
            <a
              target="_blank"
              style={{
                padding: "0rem 0.5rem",
                textDecoration: "none",
                color: "#401364",
                fontWeight: "bold",
              }}
              href="https://event-console.netlify.app/"
            >
              Event Management
            </a>
            Console
          </Text>
          <p style={{ textAlign: "center", color: "grey" }}>
            *No Account Required
          </p>
          <br />
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
                      textDecoration: "none",
                      color: "#401364",
                      fontWeight: "bold",
                    }}
                    href="https://event-console.netlify.app/"
                  >
                    Event Management
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
    </div>
  )
}

export default Banner
