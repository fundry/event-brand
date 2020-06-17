import React from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import styled from "styled-components"

import Android from "../../../assets/svg/android.svg"
import HalfDevie from "../../../assets/svg/half-device.svg"
import {
  Text,
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
          <Text style={{ width: "55rem" }} padded small center>
            Manage events Manage events Manage events Manage events Manage
            events Manage events Manage events Manage events Manage events
            Manage events
          </Text>
        </div>
        <br />
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
