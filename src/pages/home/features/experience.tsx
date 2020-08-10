import React, { useState } from "react"
import styled from "styled-components"
import media from "styled-media-query"

import Ipad from "../../../assets/svg/ipad.svg"
import { Title, Text } from "../../../styles/style"

import "./test.css"
import { FiDatabase } from "react-icons/fi"
import { IoIosChatboxes, IoIosColorPalette, IoIosPaper } from "react-icons/io"

const Body = styled.div`
  padding: 5rem 10rem;
  overflow: hidden;
  @media (max-width: 1700px) {
    padding: 5rem 2rem;
  }
  ${media.lessThan("large")`
    padding: 2rem 3rem;25rem
  `}
  ${media.lessThan("medium")`
    padding: 2rem 1.5rem;
  `};
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 1.5rem 1rem;
  }
`

const Box = styled.div`
  background: ${props => props.background};
  border: 1px solid ${props => props.background};
  height: 50px;
  box-shadow: 0 2px 3px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-radius: 50%;
  color: ${props => props.color};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 2rem 2rem;
  @media (max-width: 1700px) {
    grid-template-columns: 50% 50%;
  }
  ${media.lessThan("large")`
      display: flex;
      flex-direction : column;
      align-items : center;
  `}
`

const Experience = () => {
  return (
    <Body>
      <h1 style={{ margin: "0 2rem", color: "#22263d", fontSize: "2rem" }}>
        Now, You Can <br />
        Bootstrap An Event Website
      </h1>
      <br />
      <Grid>
        <img style={{ maxWidth: "90%" }} src={Ipad} alt="Console" />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <List>
            <li>
              <div style={{ display: "flex" }}>
                <Box color="#fff" background="#22263d">
                  <FiDatabase style={{ fontSize: "1.4rem" }} />
                </Box>

                <div
                  style={{
                    paddingTop: "0.5rem",
                    margin: "0.4rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "normal" }} small>
                    Using Stored Event Data{" "}
                  </Text>
                </div>
              </div>
            </li>

            <li>
              <div style={{ display: "flex" }}>
                <Box color="#fff" background="#22263d">
                  <IoIosPaper style={{ fontSize: "1.4rem" }} />
                </Box>

                <div
                  style={{
                    paddingTop: "0.5rem",
                    margin: "0.4rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "normal" }} small>
                    {" "}
                    Engaging Event Forms{" "}
                  </Text>
                </div>
              </div>
            </li>

            <li>
              <div style={{ display: "flex" }}>
                <Box color="#fff" background="#401364">
                  <IoIosColorPalette style={{ fontSize: "1.4rem" }} />
                </Box>

                <div
                  style={{
                    paddingTop: "0.3rem",
                    margin: "0.4rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "normal" }}>
                    {" "}
                    Reflective Event Design and Layout{" "}
                  </Text>
                </div>
              </div>
            </li>

            <li>
              <div style={{ display: "flex" }}>
                <Box color="#fff" background="#401364">
                  <IoIosChatboxes style={{ fontSize: "1.4rem" }} />
                </Box>

                <div
                  style={{
                    paddingTop: "0.5rem",
                    margin: "0.4rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "normal" }} small>
                    {" "}
                    SSO authentication wihout an Oasis account.{" "}
                  </Text>
                </div>
              </div>
            </li>

            <li>
              <div style={{ display: "flex" }}>
                <Box color="#fff" background="#401364">
                  <IoIosChatboxes style={{ fontSize: "1.4rem" }} />
                </Box>

                <div
                  style={{
                    paddingTop: "0.5rem",
                    margin: "0.4rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "normal" }} small>
                    {" "}
                    Webhook connected event chat services{" "}
                  </Text>
                </div>
              </div>
            </li>
          </List>
        </div>
      </Grid>
    </Body>
  )
}

export default Experience
