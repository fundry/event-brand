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
    background: #f9db93;
  `

  const Motto = styled.h2`
    ${media.lessThan("medium")`
    font-size: 1.6em
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
    padding: "0.5em",
    border: "1px solid black",
    borderRadius: "3px",
    background: "transparent",
    color: "white",
  })
  return (
    <Contain>
      <Header auth={auth} />

      <Flex justifyCenter>
        <img
          src={Drawing}
          alt="illustration"
          style={{ maxHeight: "90%", maxWidth: "85%", paddingTop: "2%" }}
        />

        <div>
          <br />
          <br />
          <Motto style={{ textAlign: "center" }}>
            {" "}
            Organize your conferences{" "}
          </Motto>

          <Flex justifyCenter>
            <Flex justifyAround>
              <Btn1>
                {" "}
                <Flex>
                  {" "}
                  <FiPlay style={{ fontSize: "1.5em" }} /> View Demo{" "}
                </Flex>{" "}
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
