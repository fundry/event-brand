import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"

import {
  Text,
  BgTitle,
  Contain,
  Title,
  Body,
  Button,
} from "../../../styles/style"

import "./test.css"
import { FiShare } from "react-icons/fi"

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem 5rem;
  grid-template-columns: 50% 50%;
  div {
    margin : 1rem 0rem
    display: column;
    width: 35rem;
  }
`

const Experience = () => {
  return (
    <Body>
      <Contain>
        <BgTitle center support>
          EVENT DATA MANAGEMENT
        </BgTitle>
        <Text center>You own every byte of your event data kept on Oasis.</Text>
        <br />

        <Grid>
          <div>
            <Title colored bold>
              <b> Mutate </b> your data
            </Title>
            <Text heightened small>
              Make Edit edit edit edit edit ed edit edit edit edit edit edi edit
              edit edit edit edit ediit edit all using the Oasis console.
              <br />
              <br />
              Edit edit edit edit edit ed edit edit edit edit edit edi edit edit
              edit edit edit ediit edit all using the Oasis console.
            </Text>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <FiShare style={{ fontSize: "1.7rem" }} />

              <Text small style={{ padding: "0rem 0.5rem" }}>
                <a href="/"> Try A Demo Of Oasis Console </a>{" "}
              </Text>
            </div>
          </div>

          <img
            alt="Experience art "
            src={require(`../../../assets/sample/2.svg`)}
            style={{
              height: "auto",
              maxWidth: "75%",
            }}
          />
        </Grid>

        <br />
        <br />

        <Grid>
          <div>
            <Title colored bold>
              <b> Consume </b> your data
            </Title>
            <Text heightened small>
              Make Edit edit edit edit edit ed edit edit edit edit edit edi edit
              edit edit edit edit ediit edit all using the Oasis console.
            </Text>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <FiShare style={{ fontSize: "1.7rem" }} />

              <Text small style={{ padding: "0rem 0.5rem" }}>
                <a href="/"> Read Api Documentation </a>{" "}
              </Text>
            </div>
          </div>

          <img
            alt="Experience art "
            src={require(`../../../assets/sample/2.svg`)}
            style={{
              height: "auto",
              maxWidth: "75%",
            }}
          />
        </Grid>
      </Contain>
    </Body>
  )
}

export default Experience
