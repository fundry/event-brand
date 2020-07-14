import React from "react"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { FiChevronRight } from "react-icons/fi"
import styled from "styled-components"

import { Text, BgTitle, Title, Contain, Grid } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"
import Schedule from "../../../assets/svg/schedule.svg"

const TextLink = styled(Text)`
  font-size: 1.1em;
`

const Media = () => {
  const hooks = useWindowWidth()

  return (
    <Contain>
      <br />
      <Grid schedule>
        <div>
          <Title heightened bold>
            Cloud Storage For Event Data
          </Title>
          <Contain>
            <Text style={{ width: "80%" }} small>
              Store every file relating to your event on the Cloud using Oasis.
              <br /> <br /> While storing these files, you can keep them in a
              great sync with you , your event and your attendees.
            </Text>

            <div
              style={{
                background: "#22263d",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "290px",
                padding: "0.5rem 0.5rem",
                borderRadius: "15px",
              }}
            >
              <img
                alt="cloud"
                style={{ height: "70px", width: "270px" }}
                src={require("../../../assets/images/cloudinary.png")}
              />
            </div>

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

      <Grid schedule>
        <div>
          <Title heightened bold>
            In - Event Attendee Marketplace
          </Title>
          <Contain>
            <Text style={{ width: "80%" }} small>
              Leverage your event marketplace provided to your event to create,
              advertise and accept payment for event items and Swags.
              <br /> <br /> Your marketplace can handle purchases bla bla bla
              bla
            </Text>
            <div style={{ float: "right" }}>
              <Link
                to="/docs/service"
                style={{ textAlign: "right", textDecoration: "none" }}
              >
                <Flex>
                  <TextLink small bold>
                    Read More
                  </TextLink>

                  <FiChevronRight style={{ fontSize: "1.8rem" }} />
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

      <Grid schedule>
        <div>
          <Title heightened bold>
            In - Event Custom Email Invitations
          </Title>
          <Contain>
            <Text style={{ width: "80%" }} small>
              Composing and Sending promotional and invitation emails for your
              event is now simplified using Oasis Email Support.
              <br /> <br /> Get started with broadcasting emails across all
              registered attendees within seconds using Pre-made invitation
              templates.
            </Text>
            <div style={{ float: "right" }}>
              <Link
                to="/docs/service"
                style={{ textAlign: "right", textDecoration: "none" }}
              >
                <Flex>
                  <TextLink small bold>
                    Read More
                  </TextLink>

                  <FiChevronRight style={{ fontSize: "1.8rem" }} />
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
            <Text style={{ width: "80%" }} small>
              Spread the workload of organizing your event using Oasis Teams
              support within the console.
              <br /> <br /> Accept Volunteers , create a team and grant them
              access to a specific part of your event console.
            </Text>
            <div style={{ float: "right" }}>
              <Link
                to="/docs/service"
                style={{ textAlign: "right", textDecoration: "none" }}
              >
                <Flex>
                  <TextLink small bold>
                    Read More
                  </TextLink>

                  <FiChevronRight style={{ fontSize: "1.8rem" }} />
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
