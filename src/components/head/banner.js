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
    border: "1px solid #fff",
    borderRadius: "2px",
    background: "#fff",
    textAlign: "center",
    fontSize: "1.1em",
    color: "#401364",
    height: "45px",
    width: "15em",
  })

  return (
    <Contain>
      <Header auth={auth} />

      <Flex justifyCenter>
        <div style={{ color: "#fff", padding: "2em" }}>
          <br />
          <br />
          <h5 style={{ textAlign: "center" }}> EVENTFUL </h5>
          <Motto style={{ textAlign: "center", margin: "0.5em" }}>
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
