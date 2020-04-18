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
        <Title bold> Access Control Lock </Title>
        <Text center>
          How data within eventful are secured How data within eventful are
          secured How data within eventful are secured How within eventful are
          secured How within eventful are secured How data within
        </Text>
      </Contain>
      <Contain>
        <Title bold> Set Visibility Status</Title>
        <Text center>
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
