import React, { useState } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import media from "styled-media-query"

import Ipad from "../../../assets/svg/ipad.svg"
import { Text, Title } from "../../../styles/style"

import "./test.css"
import { FiDatabase } from "react-icons/fi"

const Tooltip = styled.div`
  height: 50px;
  position: absolute;
  width: 10rem;
  transform: translate(-115%);
  padding: 0.5rem 0.5rem;
  border: 1px solid #000;
  background: #22263d;
  margin: -0.5rem 0;
  text-align: center;
  border-radius: 5px;
  color: #fff;
`

const Body = styled.div`
  padding: 5rem 4rem;
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
  height: 60px;
  box-shadow: 0 2px 3px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  border-radius: 7px;
  color: ${props => props.color};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 2rem 2rem;
  @media (max-width: 1700px) {
    grid-template-columns: 50% 50%;
  }
`

const Experience = () => {
  const [ActiveColumn, setActiveColumn] = useState<string>("archives")
  const [TipState, setTipState] = useState<string>("archives")

  const [PrevsTipState, setPrevsTipState] = useState<string>("archives")

  return (
    <Body>
      <h1 style={{ margin: "0 2rem", color: "#22263d", fontSize: "2.2rem" }}>
        Now, You Can <br />
        Bootstrap An Event Page{" "}
      </h1>
      <br />
      <Grid>
        <img src={Ipad} alt="Console" />

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
                  <FiDatabase style={{ fontSize: "1.6rem" }} />
                </Box>

                <div
                  style={{
                    paddingTop: "1rem",
                    margin: "0.4rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Title small>Using Stored Event Data </Title>
                </div>
              </div>

              <Text small heightened style={{ width: "35rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium dolorem voluptates ullam aliquid eos fugit
              </Text>
            </li>

            <li>
              <div style={{ display: "flex" }}>
                <Box color="#fff" background="#22263d">
                  <FiDatabase style={{ fontSize: "1.6rem" }} />
                </Box>

                <div
                  style={{
                    paddingTop: "1rem",
                    margin: "0.4rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Title small> Engaging Event Forms </Title>
                </div>
              </div>

              <Text heightened small style={{ width: "35rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium dolorem voluptates ullam aliquid eos fugit
              </Text>
            </li>

            <li>
              <div style={{ display: "flex" }}>
                <Box color="#fff" background="#401364">
                  <FiDatabase style={{ fontSize: "1.6rem" }} />
                </Box>

                <div
                  style={{
                    paddingTop: "1rem",
                    margin: "0.4rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Title small> Reflective Event Design and Layout </Title>
                </div>
              </div>

              <Text heightened small style={{ width: "35rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium dolorem voluptates ullam aliquid eos fugit
              </Text>
            </li>
          </List>
        </div>
      </Grid>
    </Body>
  )
}

export default Experience
