import React from "react"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { FiChevronRight } from "react-icons/fi"

import { Text, BgTitle, Title, Contain, Grid } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"
import Folder from "../../../assets/svg/folder.svg"
import Schedule from "../../../assets/svg/schedule.svg"
import ImageDelivery from "../../../assets/svg/image-delivery.svg"

const Media = () => {
  const hooks = useWindowWidth()

  return (
    <Contain>
      <br />
      <br />

      <BgTitle center support>
        Manage Event Assets
      </BgTitle>
      {hooks >= 700 ? (
        <Grid>
          <div>
            <Title bold> Centralized Cloud Storage </Title>
            <Contain>
              <Text heightened style={{ width: "77%" }} small>
                All images taken during an event are sent to registered event
                attendees All images taken during an event. <br /> <br /> Images
                are sent to each cloud space allocated to each user when they
                create an account. This space stores all assets gotten while
                using services created with Oasis
              </Text>
              <div style={{ float: "right" }}>
                <Link
                  to="/docs/service"
                  style={{ textAlign: "right", textDecoration: "none" }}
                >
                  <Flex>
                    <Text small bold>
                      Read More
                    </Text>

                    <FiChevronRight style={{ fontSize: "2rem" }} />
                  </Flex>
                </Link>
              </div>
            </Contain>
          </div>
          <img style={{ margin: "1rem" }} alt="delivery sample" src={Folder} />
        </Grid>
      ) : (
        <div>
          <Flex justifyCenter>
            <img
              style={{ margin: "1rem" }}
              alt="delivery sample"
              src={Schedule}
            />
          </Flex>
          <Title bold center>
            Centralized Cloud Storage
          </Title>
          <Contain>
            <Text heightened small>
              All images taken during an event are sent to registered event
              attendees <br /> <br /> Images are sent to each cloud space
              allocated to each user when they create an account. This space
              stores all assets gotten while using services created with Oasis
            </Text>
            <div style={{ float: "right" }}>
              <Link
                to="/docs/service"
                style={{ textAlign: "right", textDecoration: "none" }}
              >
                <Flex>
                  <Text small bold>
                    Read More
                  </Text>

                  <FiChevronRight style={{ fontSize: "2rem" }} />
                </Flex>
              </Link>
            </div>
          </Contain>
          <br />
          <br />
          <br />
        </div>
      )}
      <br />

      {hooks >= 700 ? (
        <Grid schedule>
          <div>
            <Title bold> Automatic Image Delivery </Title>
            <Contain>
              <Text heightened style={{ width: "90%" }} small>
                All images taken during an event are sent to registered event
                attendees <br /> <br /> Images are sent to each cloud space
                allocated to each user when they create an account. This space
                stores all assets gotten while using services created with Oasis
              </Text>
              <div style={{ float: "right" }}>
                <Link
                  to="/docs/service"
                  style={{ textAlign: "right", textDecoration: "none" }}
                >
                  <Flex>
                    <Text small bold>
                      Read More
                    </Text>

                    <FiChevronRight style={{ fontSize: "2rem" }} />
                  </Flex>
                </Link>
              </div>
            </Contain>
          </div>
          <img
            style={{ margin: "1rem" }}
            alt="delivery sample"
            src={ImageDelivery}
          />
        </Grid>
      ) : (
        <div>
          <Flex justifyCenter>
            <img
              style={{ margin: "1rem" }}
              alt="delivery sample"
              src={ImageDelivery}
            />
          </Flex>
          <Title bold center>
            Automatic Image Delivery
          </Title>
          <Contain>
            <Text heightened small>
              All images taken during an event are sent to registered event
              attendees. <br /> <br /> Avatars generated can be shared with the
              event hashtags on the social media
            </Text>

            <div style={{ float: "right" }}>
              <Link
                to="/docs/service"
                style={{ textAlign: "right", textDecoration: "none" }}
              >
                <Flex>
                  <Text small bold>
                    Read More
                  </Text>

                  <FiChevronRight style={{ fontSize: "2rem" }} />
                </Flex>
              </Link>
            </div>
          </Contain>
          <br />
          <br />
          <br />
        </div>
      )}
      <br />

      {hooks >= 700 ? (
        <Grid schedule>
          <div>
            <Title heightened bold>
              {" "}
              Event Schedule and Speaker Slides.{" "}
            </Title>
            <Contain>
              <Text style={{ width: "90%" }} small>
                View Event Schedule in realtime as time overlaps on each item.
                <br /> <br /> Follow a speaker's deck in realtime as the
                presenter goes over each slide.
              </Text>
              <div style={{ float: "right" }}>
                <Link
                  to="/docs/service"
                  style={{ textAlign: "right", textDecoration: "none" }}
                >
                  <Flex>
                    <Text small bold>
                      Read More
                    </Text>

                    <FiChevronRight style={{ fontSize: "2rem" }} />
                  </Flex>
                </Link>
              </div>
            </Contain>
          </div>
          <img
            style={{ margin: "2rem 0.5rem" }}
            alt="delivery sample"
            src={Schedule}
          />
        </Grid>
      ) : (
        <div>
          <Flex justifyCenter>
            <img
              style={{ margin: "1rem" }}
              alt="delivery sample"
              src={Schedule}
            />
          </Flex>
          <Title bold center>
            Speaker Slides and Assets
          </Title>
          <Contain>
            <Text heightened small>
              View Event Schedule in realtime as time overlaps on each item.
              <br /> <br /> Follow a speaker's deck in realtime as the presenter
              goes over each slide.
            </Text>
            <div style={{ float: "right" }}>
              <Link
                to="/docs/service"
                style={{ textAlign: "right", textDecoration: "none" }}
              >
                <Flex>
                  <Text small bold>
                    Read More
                  </Text>

                  <FiChevronRight style={{ fontSize: "2rem" }} />
                </Flex>
              </Link>
            </div>
          </Contain>
          <br />
          <br />
          <br />
        </div>
      )}

      {hooks >= 700 ? (
        <Grid schedule>
          <div>
            <Title heightened bold>
              {" "}
              Custom built Email Subsystem{" "}
            </Title>
            <Contain>
              <Text style={{ width: "90%" }} small>
                View Event Schedule in realtime as time overlaps on each item.
                <br /> <br /> Follow a speaker's deck in realtime as the
                presenter goes over each slide.
              </Text>
              <div style={{ float: "right" }}>
                <Link
                  to="/docs/service"
                  style={{ textAlign: "right", textDecoration: "none" }}
                >
                  <Flex>
                    <Text small bold>
                      Read More
                    </Text>

                    <FiChevronRight style={{ fontSize: "2rem" }} />
                  </Flex>
                </Link>
              </div>
            </Contain>
          </div>
          <img
            style={{ margin: "2rem 0.5rem" }}
            alt="delivery sample"
            src={Schedule}
          />
        </Grid>
      ) : (
        <div>
          <Flex justifyCenter>
            <img
              style={{ margin: "1rem" }}
              alt="delivery sample"
              src={Schedule}
            />
          </Flex>
          <Title bold center>
            Custom built Email Subsystem
          </Title>
          <Contain>
            <Text heightened small>
              View Event Schedule in realtime as time overlaps on each item.
              <br /> <br /> Follow a speaker's deck in realtime as the presenter
              goes over each slide.
            </Text>
            <div style={{ float: "right" }}>
              <Link
                to="/docs/service"
                style={{ textAlign: "right", textDecoration: "none" }}
              >
                <Flex>
                  <Text small bold>
                    Read More
                  </Text>

                  <FiChevronRight style={{ fontSize: "2rem" }} />
                </Flex>
              </Link>
            </div>
          </Contain>
        </div>
      )}
    </Contain>
  )
}

export default Media
