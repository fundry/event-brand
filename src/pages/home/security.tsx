import React, { useState } from "react"
import media from "styled-media-query"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiLock } from "react-icons/fi"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "gatsby"

import Lock from "../../assets/svg/lock.svg"

const Security = props => {
  const Contain = styled.div`
    background: transparent;
  `

  const Title = styled.h4`
    ${media.lessThan("large")`
  font-size: 2em
`};
    ${media.lessThan("medium")`
    font-size: 1.7em
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

  const Button = styled.button`
    background: ${props => (props.download ? "#ff21c1" : "transparent")};
    text-align: center;
    border-radius: 5px;
    height:  60px;
    width: ${props => (props.download ? "17em" : "14em")};
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
      height:  55px;
      width:   13em
  `};
  `

  const Text = styled.p`
    font-size: 1.4em;
    ${media.lessThan("small")`
     font-size: 1.2em;
    `};
  `

  return (
    <Contain>
      <br />

      <Flex>
        <img
          src={Lock}
          alt="Lock"
          style={{ maxHeight: "10%", maxWidth: "20%" }}
        />
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <Title style={{ paddingRight: "10px", textAlign: "center" }}>
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
