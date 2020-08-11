import React from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import styled from "styled-components"
import media from "styled-media-query"

import Wave from "../../assets/svg/wave.svg"
import {
  Text,
  Button as Butt,
  Body,
  CustomImage,
  Motto,
  CustomButton,
} from "../../styles/style"

const BannerText = styled(Text)`
  padding: 0 5rem;
  ${media.lessThan("medium")`
    padding  : 0 0rem;
    `}
  ${media.lessThan("small")`
      padding  : 0 1rem;
    `};
`

const SmallBanner = () => {
  return (
    <div>
      <Body>
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <img
            alt="illustration"
            style={{ height: "260px", width: "300px" }}
            src={require("../../assets/svg/illustration.svg")}
          />
        </div>
        <Flex justifyCenter>
          <div style={{ padding: "0rem 1em" }}>
            <Motto
              style={{
                textAlign: "center",
                fontWeight: "normal",
                padding: "0.5em 0.5rem",
              }}
            >
              A Sustainable Launcpad for <br /> your events.
            </Motto>

            <BannerText center>
              Leverage tools built within Oasis to redefine the regular event
              experience for your event team and your attendees !
            </BannerText>
            <br />
            <Flex justifyCenter>
              <CustomButton style={{ fontSize: "1rem", width: "14rem" }}>
                Get Started
              </CustomButton>
            </Flex>
          </div>
        </Flex>
      </Body>
      <img src={Wave} style={{ width: "100%" }} />
    </div>
  )
}

export default SmallBanner
