import React from "react"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { FiChevronRight } from "react-icons/fi"

import { Text, BgTitle, Title, Contain, Grid } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"
import Folder from "../../../assets/svg/cloud_security.svg"
import Schedule from "../../../assets/svg/schedule.svg"
import ImageDelivery from "../../../assets/svg/image-delivery.svg"

const Media = () => {
  const hooks = useWindowWidth()

  return (
    <Contain>
      <br />
      <br />
      <BgTitle support>CLOUD DATA STORAGE</BgTitle>
      <br />
      {hooks >= 700 ? (
        <Grid>
          <div>
            <Title style={{ fontWeight: 550 }} bold>
              {" "}
              Allocated Storage For Event Assets{" "}
            </Title>
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
          <img
            style={{ margin: "1rem", maxWidth: "70%" }}
            alt="delivery sample"
            src={Folder}
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
            <Title bold style={{ fontWeight: 550 }}>
              {" "}
              Automatic Image Delivery{" "}
            </Title>
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
    </Contain>
  )
}

export default Media
