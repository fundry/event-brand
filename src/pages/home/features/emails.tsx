import React from "react"
import { Link } from "gatsby"
import { FeaturesList } from "../../../data"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"

import { Contain, Text, Title, BgTitle, Items } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"

const Email = (props): JSX.Element => {
  const hooks = useWindowWidth()
  return (
    <Contain>
      <br />
      <br />
      <br />
      <BgTitle center support>
        Custom Built Email Sub-system
      </BgTitle>
      <Text items center>
        Bring in your external tools to manage your events better on Oasis.
        <br />
      </Text>

      <br />
    </Contain>
  )
}

export default Email
