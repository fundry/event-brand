import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FeaturesList } from "../../../data"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"

import {
  Contain,
  Text,
  Title,
  Body,
  BgTitle,
  Items,
} from "../../../styles/style"
import Feature from "../../../assets/svg/features.svg"

const Integration = (props): JSX.Element => {
  return (
    <Contain>
      <br />
      <BgTitle center> Integrate With Your External Tools </BgTitle>
      <Text items>
        Use your existing ticket managers while managing other aspects of your
        event within Eventful
      </Text>
      <Items>
        {FeaturesList.map(({ title, id, text }) => {
          return (
            <div>
              <Contain key={id}>
                <Flex justifyCenter>
                  <img
                    src={Feature}
                    alt="feature"
                    style={{
                      maxHeight: "50%",
                      maxWidth: "70%",
                      padding: "1em",
                    }}
                  />
                </Flex>
                <Title features>{title}</Title>

                <Text items>{text}</Text>

                <Link to="">
                  <Flex justifyCenter>
                    <p> Learn More </p>
                    <IoIosArrowForward
                      style={{ fontSize: "1.5em", paddingLeft: "5px" }}
                    />
                  </Flex>
                </Link>
              </Contain>
            </div>
          )
        })}
      </Items>
    </Contain>
  )
}

export default Integration
