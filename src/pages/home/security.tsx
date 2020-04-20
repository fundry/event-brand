import React from "react"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "gatsby"

import { Text, Title, BgTitle, Contain, Body } from "../../styles/style"

const Security = () => {
  return (
    <Body>
      <br />

      <BgTitle support style={{ textAlign: "right" }} features>
        Security & Privacy
      </BgTitle>

      <Contain>
        <Title style={{ color: "#401364" }} bold colored>
          Access Control Lock{" "}
        </Title>
        <Text center small>
          How data within eventful are secured How data within eventful are
          secured How data within eventful are secured How within eventful are
          secured How within eventful are secured How data within
        </Text>
      </Contain>
      <br />
      <Contain>
        <Title style={{ color: "#401364" }} bold colored>
          Set Visibility Status
        </Title>
        <Text center small>
          How data within eventful are secured How data within eventful are
          secured How data within eventful are secured How within eventful are
          secured How within eventful are secured How data within
        </Text>
      </Contain>

      <br />
    </Body>
  )
}

export default Security
