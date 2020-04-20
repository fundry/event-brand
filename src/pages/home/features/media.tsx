import React from "react"
import { Link } from "gatsby"
import Flex from "styled-flex-component"

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
      {hooks >= 700 ? (
        <Grid>
          <div>
            <Title bold> Automatic Image Delivery </Title>
            <Contain>
              <Text style={{ width: "77%" }} small>
                All images taken during an event are sent to registered event
                attendees All images taken during an event. <br /> <br /> Images
                are sent to each cloud space allocated to each user when they
                create an account. This space stores all assets gotten while
                using services created with Oasis
              </Text>
              <Link to="/" style={{ textAlign: "right" }}>
                Read More
              </Link>
            </Contain>
          </div>
          <img style={{ margin: "1rem" }} alt="delivery sample" src={Folder} />
        </Grid>
      ) : (
        <div>
          <Flex justifyCenter>
            {" "}
            <img
              style={{ margin: "1rem" }}
              alt="delivery sample"
              src={Folder}
            />{" "}
          </Flex>
          <Title bold center>
            Automatic Image Delivery{" "}
          </Title>
          <Contain>
            <Text small>
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
      )}
      <br />
      {hooks >= 700 ? (
        <Grid>
          <div>
            <Title bold> Automatic Image Delivery </Title>
            <Contain>
              <Text style={{ width: "77%" }} small>
                All images taken during an event are sent to registered event
                attendees All images taken during an event. <br /> <br /> Images
                are sent to each cloud space allocated to each user when they
                create an account. This space stores all assets gotten while
                using services created with Oasis
              </Text>
              <Link to="/" style={{ textAlign: "right" }}>
                Read More
              </Link>
            </Contain>
          </div>
          <img style={{ margin: "1rem" }} alt="delivery sample" src={Folder} />
        </Grid>
      ) : (
        <div>
          <Flex justifyCenter>
            {" "}
            <img
              style={{ margin: "1rem" }}
              alt="delivery sample"
              src={Folder}
            />{" "}
          </Flex>
          <Title bold center>
            Generate Image Avatar{" "}
          </Title>
          <Contain>
            <Text small>
              All images taken during an event are sent to registered event
              attendees All images taken during an event. <br /> <br /> Avatars
              generated can be shared with the event hashtags on the social
              media
            </Text>
            <Link to="/" style={{ textAlign: "right" }}>
              Read More
            </Link>
          </Contain>
        </div>
      )}
      <br />

      {hooks >= 700 ? (
        <Grid>
          <div>
            <Title bold> Event Schedule and Speaker Slides. </Title>
            <Contain>
              <Text style={{ width: "77%" }} small>
                View Event Schedule in realtime as time overlaps on each item.
                <br /> <br /> Follow a speaker's deck in realtime as the
                presenter goes over each slide.
              </Text>
              <Link to="/" style={{ textAlign: "right" }}>
                Read More
              </Link>
            </Contain>
          </div>
          <img style={{ margin: "1rem" }} alt="delivery sample" src={Folder} />
        </Grid>
      ) : (
        <div>
          <Flex justifyCenter>
            {" "}
            <img
              style={{ margin: "1rem" }}
              alt="delivery sample"
              src={Folder}
            />{" "}
          </Flex>
          <Title bold center>
            Speaker Slides and Assets
          </Title>
          <Contain>
            <Text small>
              View Event Schedule in realtime as time overlaps on each item.
              <br /> <br /> Follow a speaker's deck in realtime as the presenter
              goes over each slide.
            </Text>
            <Link to="/" style={{ textAlign: "right" }}>
              Read More
            </Link>
          </Contain>
        </div>
      )}
    </Contain>
  )
}

export default Media
