import React, { useState, useEffect } from "react"
import media from "styled-media-query"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiLock } from "react-icons/fi"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "gatsby"

import Lock from "../../assets/svg/lock.svg"
import { Text, Title } from "../../styles/style"

const Security = props => {
  const Contain = styled.div`
    background: transparent;
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
    <Contain>
      <br />

      <Flex>
        {Width >= 720 ? (
          <img
            src={Lock}
            alt="Lock"
            style={{ maxHeight: "10%", maxWidth: "20%" }}
          />
        ) : null}
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <Title style={{ textAlign: "center" }} features>
            Security & Privacy
          </Title>

          <Text style={{ textAlign: "center", width: "35em" }}>
            How data within eventful are secured How data within eventful are
            secured How data within eventful are secured How data within
            eventful are secured How data within eventful are secured
          </Text>

          <Text style={{ textAlign: "center", width: "35em" }}>
            How data within eventful are secured How data within eventful are
            secured How data within eventful are secured How data within
            eventful are secured How data within eventful are secured
          </Text>

          <Flex justifyCenter>
            <Link to="">
              <Flex>
                <p style={{ fontSize: "1.3em" }}> Learn More </p>
                <IoIosArrowForward
                  style={{ fontSize: "2.2em", paddingLeft: "5px" }}
                />
              </Flex>
            </Link>{" "}
          </Flex>
        </div>
      </Flex>

      <br />
    </Contain>
  )
}

export default Security
