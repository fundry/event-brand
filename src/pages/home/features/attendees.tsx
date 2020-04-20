import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import media from "styled-media-query"

import Android from "../../../assets/svg/android.svg"
import { Text, BigTitle, Button } from "../../../styles/style"

const Contain = styled.div`
  padding-left: 13em;
  padding-right: 13em;
  ${media.lessThan("large")`
padding-left: 5em;
padding-right: 5em;
`};
  ${media.lessThan("medium")`
padding-left: 1em;
padding-right: 1em;
`};
  ${media.lessThan("small")`
padding-left: 1em;
padding-right: 1em;
`};
`

const Attendees = () => {
  return (
    <div>
      <Flex justifyCenter>
        <img
          alt="android"
          style={{ maxHeight: "50%", maxWidth: "65%", paddingTop: "1%" }}
          src={Android}
        />
      </Flex>

      <Contain>
        <BigTitle app>Get the App! </BigTitle>
        <Text small center>
          Manage events Manage events Manage events Manage events Manage events
          Manage events Manage events Manage events Manage events Manage events
        </Text>

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
                    <FaGooglePlay style={{ fontSize: "1.7em" }} />{" "}
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
    </div>
  )
}

export default Attendees
