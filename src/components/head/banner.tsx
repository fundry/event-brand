import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import { IoIosDesktop } from "react-icons/io"
import { FiArrowRight } from "react-icons/fi"

import Header from "./header"
import Illustration from "../../assets/svg/illustration.svg"
import { Text, Button, Body, Motto } from "../../styles/style"

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
        <Body>
          <Flex justifyAround>
            <img
              src={Illustration}
              alt="illustration here"
              style={{ maxHeight: "40%", maxWidth: "37%" }}
            />

            <Flex column>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Motto style={{ textAlign: "right", margin: "2rem  0.2em" }}>
                Create, Manage and Organize <br /> your events.
              </Motto>

              <Text style={{ textAlign: "right" }} items>
                Create your conferences and let's do the management!{" "}
              </Text>
              <Flex justifyCenter>
                <Button one download rounded style={{ textAlign: "center" }}>
                  <Flex justifyCenter>
                    Get Started
                    <div style={{ paddingLeft: "30px" }}>
                      <FiArrowRight style={{ fontSize: "1.6em" }} />{" "}
                    </div>
                  </Flex>
                </Button>
              </Flex>
              <br />
            </Flex>
          </Flex>
          <Text center small>
            Try a demo of the{" "}
            <a
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#401364",
                fontWeight: "bold",
              }}
              href="https://app-event.netlify.com"
            >
              {" "}
              Event Management{" "}
            </a>{" "}
            Console
          </Text>
          <p style={{ textAlign: "center", color: "grey" }}>
            *No Account Required{" "}
          </p>
          <br />
        </Body>
      ) : (
        <Flex justifyCenter>
          <div style={{ padding: "2em" }}>
            <Motto style={{ textAlign: "center", margin: "0.5em" }}>
              Create, Manage and Organize <br /> your events.{" "}
            </Motto>

            <Text style={{ textAlign: "center", width: "50em" }} small>
              Create your conferences and let's do the management!{" "}
            </Text>
            <Flex justifyCenter>
              <Flex column>
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
                          <FaGooglePlay style={{ fontSize: "1.5em" }} />{" "}
                        </div>
                        Play Store
                      </Flex>
                    </Button>
                  </div>
                </Flex>{" "}
                <br />
                <Text center small>
                  Try a demo of the{" "}
                  <a
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "#401364",
                      fontWeight: "bold",
                    }}
                    href="https://app-event.netlify.com"
                  >
                    {" "}
                    Event Management{" "}
                  </a>{" "}
                  Console
                </Text>
                <p style={{ textAlign: "center", color: "grey" }}>
                  *No Account Required{" "}
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
