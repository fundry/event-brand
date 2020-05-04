import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import media from "styled-media-query"
import Cloud from "../../assets/svg/cloud_security.svg"

import { Text, Title, BgTitle, Contain, Body } from "../../styles/style"

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 30% 70%;
  ${media.lessThan("medium")`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  `};
  ${media.lessThan("small")`
  text-align: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  `};
`

const Security = () => {
  return (
    <Body>
      <Body>
        <br />

        <BgTitle support style={{ textAlign: "right" }} features>
          Security & Privacy
        </BgTitle>

        <Contain>
          <Grid>
            <img
              src={Cloud}
              alt="Cloud illustration"
              style={{ maxWidth: "45%" }}
            />

            <div>
              <Title style={{ color: "#401364" }} bold colored>
                Access Control Lock{" "}
              </Title>
              <Text center small>
                How data within eventful are secured How data within eventful
                are secured How data within eventful are secured How within
                eventful are secured How within eventful are secured How data
                within
              </Text>
            </div>
          </Grid>
        </Contain>
        <br />
        <Grid>
          <img
            src={Cloud}
            alt="Cloud illustration"
            style={{ maxWidth: "45%" }}
          />

          <div>
            <Title style={{ color: "#401364" }} bold colored>
              User Visibility Status
            </Title>
            <Text center small>
              How data within eventful are secured How data within eventful are
              secured How data within eventful are secured How within eventful
              are secured How within eventful are secured How data within
            </Text>
          </div>
        </Grid>
        <br />
      </Body>
    </Body>
  )
}

export default Security
