import React from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import styled from "styled-components"
import media from "styled-media-query"

import Wave from "../../assets/svg/wave.svg"
import { Text, Button as Butt, CustomImage, Motto } from "../../styles/style"

const Button = styled(Butt)`
  ${media.lessThan("medium")`
    font-size : 1rem;
 `};
`

const SmallBanner = () => {
  return (
    <div>
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <img
          alt="illustration"
          style={{ height: "180px", width: "250px" }}
          src={require("../../assets/svg/illustration.svg")}
        />
      </div>
      <div></div>
      <Flex justifyCenter>
        <div style={{ padding: "0rem 1em" }}>
          <Motto style={{ textAlign: "center", padding: "0.5em 0.5rem" }}>
            Create, Manage and Organize <br /> your events.
          </Motto>

          <Text style={{ textAlign: "center", width: "auto" }} small>
            Create your conferences and let's do the management!
          </Text>

          <Flex justifyCenter>
            <Flex column>
              <br />
              <Flex>
                <div style={{ fontWeight: "bold" }}>
                  <Button download two>
                    <Flex justifyCenter>
                      <div style={{ paddingRight: "7px" }}>
                        <DiAppstore style={{ fontSize: "1.7em" }} />
                      </div>
                      Apple Store
                    </Flex>
                  </Button>
                </div>
                <br />
                <div style={{ textAlign: "center", fontWeight: "bold" }}>
                  <Button
                    download
                    two
                    style={{ width: "12em", marginLeft: "1em" }}
                  >
                    <Flex justifyCenter>
                      <div style={{ paddingRight: "7px" }}>
                        <FaGooglePlay style={{ fontSize: "1.5em" }} />
                      </div>
                      Play Store
                    </Flex>
                  </Button>
                </div>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Flex>
      <img src={Wave} style={{ width: "100%" }} />
    </div>
  )
}

export default SmallBanner
