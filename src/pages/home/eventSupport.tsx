import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { Text, Title, BgTitle } from "../../styles/style"

import conference from "../../assets/svg/conference.svg"

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem 0rem;
  grid-template-columns: 50% 50%;
  div {
    margin: 3rem 0rem;
    display: column;
    width: 35rem;
  }
  img {
    height: auto;
    max-width: 90%;
  }
  ${media.lessThan("large")`
  display: grid;
  grid-gap: 1rem 0rem;
  grid-template-columns: 50% 50%;
  div {
          margin : 1rem 0rem;
          display: column;
          width: 35rem;
        p {
            width : 27rem;
            text-align :  left;
          }
       }
  `};
  ${media.lessThan("medium")`
      display : flex;
      flex-direction : column;
      align-items : center;
       div {
          margin : 1rem 0rem
          display: column;
          align-items: center
          width: auto;
      }
  `};
`

const EventSupport = (): JSX.Element => {
  return (
    <div>
      <BgTitle support>SPECIFIC EVENT SUPPORT </BgTitle>

      <div>
        <Grid>
          <div>
            <Title style={{ fontWeight: 500 }} bold>
              Oasis For <b> Conferences </b>
            </Title>
            <Text heightened small>
              Make Edit edit edit edit edit ed edit edit edit edit edit edi edit
              edit edit edit edit ediit edit all using the Oasis console.
              <br />
              <br />
              Edit edit edit edit edit ed edit edit edit edit edit edi edit edit
              edit edit edit ediit edit all using the Oasis console.
            </Text>
          </div>

          <img alt="Experience art " src={conference} />
        </Grid>
      </div>
      <br />
      <div>
        <Grid>
          <div>
            <Title style={{ fontWeight: 500 }} bold>
              Oasis For <b> Meetups </b>
            </Title>

            <Text heightened small>
              Make Edit edit edit edit edit ed edit edit edit edit edit edi edit
              edit edit edit edit ediit edit all using the Oasis console.
              <br />
            </Text>
          </div>

          <img
            alt="Experience art "
            src={require("../../assets/svg/meetups.svg")}
            style={{
              height: "auto",
              maxWidth: "90%",
            }}
          />
        </Grid>
      </div>

      <div style={{ padding: "0rem 2rem" }}>
        <br />
        <Title center style={{ fontWeight: 500 }} bold>
          Fully Managed Multi - Region <b> Meetup Groups </b>
        </Title>

        <Text small center>
          Edit edit edit edit edit ed edit edit edit edit edit edi edit edit
          edit edit edit ediit edit all using the Oasis console.
        </Text>
      </div>
    </div>
  )
}

export default EventSupport
