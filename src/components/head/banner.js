import React, { useState } from "react"
import media from "styled-media-query"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiPlay } from "react-icons/fi"

import Header from "./header"
import Drawing from "../../assets/svg/banner.svg"

const Banner = props => {
  const Contain = styled.div`
    background: #6c3eef;
  `

  const Motto = styled.h2`
    ${media.lessThan("medium")`
    font-size: 1.8em
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

  const Btn1 = styled.button({
    padding: "1em",
    border: "1px solid black",
    borderRadius: "3px",
    background: "transparent",
    color: "white",
    height: "45px",
    width: "17em",
  })

  return (
    <Contain>
      <Header auth={auth} />

      <Flex justifyCenter>
        <div style={{ color: "#fff" }}>
          <br />
          <br />
          <h4 style={{ textAlign: "center" }}> EVENTFUL </h4>
          <Motto style={{ textAlign: "center" }}>
            Create , Manage and Organize your conferences{" "}
          </Motto>

          <Flex justifyCenter>
            <Flex justifyAround>
              <Btn1>
                {" "}
                <Flex> Get Started </Flex>{" "}
              </Btn1>
            </Flex>
          </Flex>
        </div>
      </Flex>

      <br />
    </Contain>
  )
}

export default Banner
