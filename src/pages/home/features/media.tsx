import React from "react"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { FiChevronRight, FiHeart, FiExternalLink } from "react-icons/fi"
import styled from "styled-components"

import { Text, Hover, Title, Contain, Grid } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"
import Schedule from "../../../assets/svg/schedule.svg"

const TextLink = styled(Text)`
  font-size: 1.1em;
`

const Cart = styled.div`
  box-shadow: 0px 3px 6px grey;
  height: 30vh;
  width: 15rem;
  padding: 0.5rem 0.5rem;
  background: #fff;
  img {
    margin: 0;
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
`

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 1rem 2rem;
`

const Items = [{ id: 1 }, { id: 2 }, { id: 3 }]

const Media = () => {
  const hooks = useWindowWidth()

  return (
    <Contain>
      <br />

      <h2> Oasis Provides </h2>

      <Grid schedule>
        <div>
          <Title heightened bold>
            Cloud Storage For Event Data
          </Title>
          <Contain>
            <Text small>
              Store every file relating to your event on the Cloud using Oasis.
              <br /> <br /> While storing these files, you can keep them in a
              great sync with you , your event and your attendees.
            </Text>

            <div style={{}}>
              <Link to="/docs/service" style={{ textDecoration: "none" }}>
                <Flex>
                  <Text small bold>
                    Read More
                  </Text>

                  <FiChevronRight style={{ fontSize: "2rem" }} />
                </Flex>
              </Link>
            </div>
            <br />
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
        <CartGrid>
          {Items.map(({ id }) => {
            return (
              <Cart key={id}>
                <div
                  style={{
                    marginBottom: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Hover style={{ display: "flex" }}>
                    <Title style={{ fontSize: "1.2rem" }} small>
                      Concatenate
                    </Title>

                    <div style={{ margin: "0rem 0.3rem" }}>
                      <FiExternalLink style={{ fontSize: "1.3rem" }} />
                    </div>
                  </Hover>

                  <Hover>
                    <FiHeart style={{ fontSize: "1.5rem" }} />
                  </Hover>
                </div>
                <div
                  style={{
                    marginBottom: "15px",
                    textAlign: "center",
                    background: "#f2f5ff",
                  }}
                >
                  <img src={require("../../../assets/svg/illustration.svg")} />
                </div>
                <Text style={{ textAlign: "center" }}>
                  Sneakers <br />{" "}
                  <span style={{ color: "grey", fontSize: "1rem" }}>
                    #Clothing , #Attendees{" "}
                  </span>
                </Text>
              </Cart>
            )
          })}
        </CartGrid>

        <div>
          <Title heightened bold>
            Do More With Less
          </Title>
          <Title heightened bold>
            In - Event Attendee Marketplace
          </Title>
          <Contain>
            <Text small>
              Leverage your event marketplace provided to your event to create,
              advertise and accept payment for event items and Swags.
              <br /> <br /> Your marketplace can handle purchases bla bla bla
              bla
            </Text>
            <br />
            <div>
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
      </Grid>

      <br />
      <Grid schedule>
        <div>
          <Title heightened bold>
            In - Event Custom Email Invitations
          </Title>
          <Contain>
            <Text small>
              Composing and Sending promotional and invitation emails for your
              event is now simplified using Oasis Email Support.
              <br /> <br /> Get started with broadcasting emails across all
              registered attendees within seconds using Pre-made invitation
              templates.
            </Text>
            <div>
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
      <br />
      <br />

      <Grid schedule>
        <img
          style={{ margin: "2rem 0.5rem" }}
          alt="delivery sample"
          src={Schedule}
        />

        <div>
          <Title heightened bold>
            In-Event Team Support
          </Title>
          <Contain>
            <Text small>
              Spread the workload of organizing your event using Oasis Teams
              support within the console.
              <br /> <br /> Accept Volunteers , create a team and grant them
              access to a specific part of your event console.
            </Text>
            <div>
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
      </Grid>
    </Contain>
  )
}

export default Media
