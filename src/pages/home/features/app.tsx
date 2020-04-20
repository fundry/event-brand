import React from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import styled from "styled-components"
import media from "styled-media-query"

import Android from "../../../assets/svg/android.svg"
import HalfDevie from "../../../assets/svg/half-device.svg"
import Feature from "../../../assets/svg/features.svg"
import {
  Items,
  Text,
  Body,
  Contain,
  BgTitle,
  BigTitle,
  Button,
  Title,
} from "../../../styles/style"
import { AppFeatures } from "../../../data"

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
};
`

const App = () => {
  return (
    <Contain>
      <BgTitle support>User Centered Mobile Design</BgTitle>

      <br />

      <Grid>
        {AppFeatures.map(({ id, name, summary }) => {
          return (
            <Contain key={id}>
              <Flex justifyCenter>
                <img
                  src={HalfDevie}
                  style={{
                    width: "30%",
                    height: "auto",
                  }}
                  alt={"Feature Demo"}
                />
              </Flex>
              <Title small bold center>
                {name}{" "}
              </Title>
              <Text padded small center>
                {" "}
                {summary}{" "}
              </Text>
            </Contain>
          )
        })}
      </Grid>

      <br />
      <br />

      <Flex justifyCenter>
        <img
          alt="android"
          style={{ maxHeight: "50%", maxWidth: "65%", paddingTop: "1%" }}
          src={Android}
        />
      </Flex>

      <Contain>
        <BigTitle app>Get the App! </BigTitle>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Text style={{ width: "40rem" }} padded small center>
            Manage events Manage events Manage events Manage events Manage
            events Manage events Manage events Manage events Manage events
            Manage events
          </Text>
        </div>

        <Flex justifyCenter>
          <Flex>
            <Button download two style={{ marginRight: "25px" }}>
              <Flex justifyCenter>
                <div style={{ paddingRight: "7px" }}>
                  <DiAppstore style={{ fontSize: "1.7em" }} />{" "}
                </div>
                Apple Store
              </Flex>
            </Button>

            <div style={{ textAlign: "center" }}>
              <Button download one style={{ width: "11em" }}>
                <Flex justifyCenter>
                  <div style={{ paddingRight: "7px" }}>
                    <FaGooglePlay style={{ fontSize: "1.6em" }} />{" "}
                  </div>
                  Play Store
                </Flex>
              </Button>
            </div>
          </Flex>
        </Flex>
        <br />

        <br />
      </Contain>
    </Contain>
  )
}

export default App
