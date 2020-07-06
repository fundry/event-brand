import React from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import styled from "styled-components"
import media from "styled-media-query"

import Android from "../../../assets/svg/android.svg"
import Iphone from "../../../assets/svg/iphone.svg"
import { Text, Contain, BigTitle, Button, Title } from "../../../styles/style"

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem 2rem;
  grid-template-columns: 50% 50%;
  div {
    margin: 5rem 0rem;
  }
  ${media.lessThan("large")`
    display: flex;
    flex-direction : column;
    align-items : center;
   div {
    margin: 2rem 0rem;
  }
  `};
  ${media.lessThan("medium")`
    display: flex;
    flex-direction : column;
    align-items : center;
     div {
    margin: 1rem 0rem;
  }
  `};
  ${media.lessThan("small")`
    display: flex;
    flex-direction : column;
    align-items : center;
     div {
    margin: 0rem 0rem;
  }
  `};
`

const App = (props): JSX.Element => {
  return (
    <Contain>
      <Flex justifyCenter />

      <Contain>
        <Grid>
          <img
            alt="android"
            style={{ maxHeight: "70%", maxWidth: "75%", paddingTop: "1%" }}
            src={Android}
          />
          <div>
            <Title center> Realtime Event Activities and Slides. </Title>

            <Text center padded small>
              View Event Schedule in realtime as time overlaps on each item.
              <br /> <br /> Follow a speaker's deck in realtime as the presenter
              goes over each slide.
            </Text>
            <br />
          </div>
        </Grid>

        <div>
          <BigTitle app style={{ marginBottom: "1rem", textAlign: "center" }}>
            Join an Event Today
          </BigTitle>
          <Flex justifyCenter>
            <Flex>
              <Button download two style={{ marginRight: "25px" }}>
                <Flex justifyCenter>
                  <div style={{ paddingRight: "7px" }}>
                    <DiAppstore style={{ fontSize: "1.9em" }} />{" "}
                  </div>
                  Apple Store
                </Flex>
              </Button>

              <Button download one style={{ width: "11em" }}>
                <Flex justifyCenter>
                  <div style={{ paddingRight: "7px" }}>
                    <FaGooglePlay style={{ fontSize: "1.5em" }} />{" "}
                  </div>
                  Play Store
                </Flex>
              </Button>
            </Flex>
          </Flex>
          <br />
        </div>

        <br />
      </Contain>
    </Contain>
  )
}

export default App
