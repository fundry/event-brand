import React from "react"
import { Link } from "gatsby"

import { Text, BgTitle, Contain } from "../../../styles/style"

const Media = () => {
  return (
    <Contain>
      <BgTitle center> Manage Event Assets </BgTitle>
      <br />
      <BgTitle support> Automatic Image Delivery </BgTitle>
      <Contain center>
        <Text center>
          All images taken during an event are sent to registered event
          attendees.{" "}
        </Text>
        <Link to="/"> Read More </Link>
      </Contain>

      <br />
      <BgTitle support> Generate User Avatar for Events </BgTitle>
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
