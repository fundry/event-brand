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
      <Grid schedule>
        <div>
          <Title heightened bold>
            Centralized Cloud Storage
          </Title>
          <Contain>
            <Text style={{ width: "90%" }} small>
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
        <img
          style={{ margin: "2rem 0.5rem" }}
          alt="delivery sample"
          src={Schedule}
        />
      </Grid>
      <br />
      <br />

      <Grid schedule>
        <div>
          <Title heightened bold>
            In-Event Marketplace
          </Title>
          <Contain>
            <Text style={{ width: "90%" }} small>
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
        <img
          style={{ margin: "2rem 0.5rem" }}
          alt="delivery sample"
          src={Schedule}
        />
      </Grid>

      <Grid schedule>
        <div>
          <Title heightened bold>
            In-Event Team Support
          </Title>
          <Contain>
            <Text style={{ width: "90%" }} small>
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
        <img
          style={{ margin: "2rem 0.5rem" }}
          alt="delivery sample"
          src={Schedule}
        />
      </Grid>
    </Contain>
  )
}

export default Media
