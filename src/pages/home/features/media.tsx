import React from "react"
import { Link } from "gatsby"

import { Text, BgTitle, Title, Contain } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"

const Media = () => {
  const hooks = useWindowWidth()

  return (
    <Contain>
      <BgTitle center> Manage Event Assets </BgTitle>
      <br />
      <Title support> Automatic Image Delivery </Title>
      <Contain center>
        <Text center>
          All images taken during an event are sent to registered event
          attendees.{" "}
        </Text>
        <Link to="/"> Read More </Link>
      </Contain>

      <br />
      <Title support> Generate User Avatar for Events </Title>
      <Contain center>
        <Text center>
          Generate a user avatar for each event based on the event preferences
        </Text>
        <Link to="/"> Read More </Link>
      </Contain>
    </Contain>
  )
}

export default Media
