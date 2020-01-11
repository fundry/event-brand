import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import media from "styled-media-query"

import Android from "../../../assets/svg/android.svg"

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h1`
  color: blue;
  font-size: ${props => (props.big ? null : "1.7em")};
`

const Contain = styled.div`
  padding-left: 13em;
  padding-right: 13em;
  ${media.lessThan("large")`
padding-left: 5em;
padding-right: 5em;
`};
  ${media.lessThan("medium")`
padding-left: 2em;
padding-right: 2em;
`};
  ${media.lessThan("small")`
padding-left: 1em;
padding-right: 1em;
`};
`

const Text = styled.p`
  font-size: 1.2em;
  text-align: center;
`

const Btn1 = styled.button`
  background: ${props => (props.download ? "#ff21c1" : "transparent")};
  text-align: center;
  border-radius: 5px;
  height:  60px;
  width: ${props => (props.one ? "15em" : "12em")};
  border: 2px solid #ff21c1;
  color: ${props => (props.download ? "#fff" : "#401364")};
  margin: 0 1em;
  padding: 0.25em 0.5em;
  font-size: 1.3em;
  &:hover {
    color: #401364
    background: #fff;
  }
  ${media.lessThan("medium")`
    margin: 0 0.25em;
    height:  57px;
    border: 1.7px solid #ff21c1;
    width: ${props => (props.one ? "15em" : "9em")};
`};
`

const Attendees = () => {
  return (
    <Body>
      <Flex justifyCenter>
        <img
          alt="android"
          style={{ maxHeight: "50%", maxWidth: "65%", paddingTop: "1%" }}
          src={Android}
        />
      </Flex>

      <Contain>
        <Title style={{ textAlign: "center", fontWeight: "bold" }} big>
          {" "}
          Get the App!{" "}
        </Title>
        <Text>
          Manage events Manage events Manage events Manage events Manage events
          Manage events Manage events Manage events Manage events Manage events
          Manage events Manage events Manage events Manage events Manage events
          Manage events Manage events Manage events Manage events Manage events
          Manage events Manage events Manage events Manage events Manage events
          Manage events Manage events
        </Text>

        <Flex justifyCenter>
          <Flex>
            <Btn1 download two>
              <Flex justifyCenter>
                <div style={{ paddingRight: "7px" }}>
                  <DiAppstore style={{ fontSize: "1.7em" }} />{" "}
                </div>
                Apple Store
              </Flex>
            </Btn1>

            <br />
            <div style={{ textAlign: "center" }}>
              <Btn1 download one style={{ width: "12em" }}>
                <Flex justifyCenter>
                  <div style={{ paddingRight: "7px" }}>
                    <FaGooglePlay style={{ fontSize: "1.7em" }} />{" "}
                  </div>
                  Play Store
                </Flex>
              </Btn1>
            </div>
          </Flex>
        </Flex>
        <br />

        <br />
      </Contain>
    </Body>
  )
}

export default Attendees
