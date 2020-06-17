import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"

import Header from "./header"
import Wave from "../../assets/svg/wave.svg"
import { Text, Button, CustomImage, Motto, Title } from "../../styles/style"

import LargeBanner from "./LargeBanner"

const Banner = () => {
  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 500)

  const handleResize = (value: any) => {
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
        <LargeBanner />
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
