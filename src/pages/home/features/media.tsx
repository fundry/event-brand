import React from "react"
import { Link } from "gatsby"

import { Text, BgTitle, Title, Contain, Grid } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"
import Folder from "../../../assets/svg/folder.svg"

const Media = () => {
  const hooks = useWindowWidth()

  return (
    <Contain>
      <BgTitle center support>
        Manage Event Assets{" "}
      </BgTitle>
      <br />
      <Grid>
        <div>
          <Title bold> Automatic Image Delivery </Title>
          <Contain>
            <Text style={{ width: "77%" }} small>
              All images taken during an event are sent to registered event
              attendees All images taken during an event. <br /> <br /> Images
              are sent to each cloud space allocated to each user when they
              create an account. This space stores all assets gotten while using
              services created with Oasis
            </Text>
            <Link to="/" style={{ textAlign: "right" }}>
              Read More
            </Link>
          </Contain>
        </div>
        <img style={{ margin: "1rem" }} alt="delivery sample" src={Folder} />
      </Grid>
      <br />
      <Grid>
        <div>
          <Title bold> Generate Event Avatars </Title>
          <Contain>
            <Text style={{ width: "77%" }} small>
              All images taken during an event are sent to registered event
              attendees All images taken during an event. <br /> <br /> Images
              are sent to each cloud space allocated to each user when they
              create an account. This space stores all assets gotten while using
              services created with Oasis
            </Text>
            <Link to="/"> Read More </Link>
          </Contain>
        </div>
        <img style={{ margin: "1rem" }} alt="delivery sample" src={Folder} />
      </Grid>
    </Contain>
  )
}

export default Media
