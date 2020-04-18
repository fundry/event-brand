import React from "react"
import { Link } from "gatsby"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import Flex from "styled-flex-component"

import { Text, BgTitle, Contain, Slider } from "../../../styles/style"
import Ipad from "../../../assets/svg/ipad.svg"

// TODO:  this component should be a slider later on

const Experience = () => {
  return (
    <Contain>
      <BgTitle center> Immersive Event Experience </BgTitle>
      <br />
      <Contain center>
        <Slider>
          <Contain width id="1">
            <img
              alt="Experience art "
              src={Ipad}
              style={{ height: "auto", maxWidth: "90%" }}
            />
            <BgTitle support> Create Realtime Polls </BgTitle>
          </Contain>
          <Contain width id="1">
            <img
              alt="Experience art "
              src={Ipad}
              style={{ height: "auto", maxWidth: "90%" }}
            />
            <BgTitle support> Key Into Slides </BgTitle>
          </Contain>{" "}
          <Contain width id="1">
            <img
              alt="Experience art "
              src={Ipad}
              style={{ height: "auto", maxWidth: "90%" }}
            />
            <BgTitle support> Create Realtime Polls </BgTitle>
          </Contain>
        </Slider>
      </Contain>
    </Contain>
  )
}

export default Experience