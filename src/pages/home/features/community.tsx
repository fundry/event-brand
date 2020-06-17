import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import media from "styled-media-query"

import {
  Contain,
  BgTitle,
  Text,
  Items,
  Title,
  Body,
} from "../../../styles/style"
import Volunteer from "../../../assets/svg/volunteer.svg"
import { CommunityFeatures } from "../../../data"
import useWindowWidth from "../../../styles/resize"

const Button = styled.div`
  background: #fff
  text-align: center;
  border-radius:   5px
  height:  55px;
  width: 16rem
  border: 2px solid #fff;
  color: #401364
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1.2em;
  &:hover {
    color: #401364
    background: #fff;
  }
  ${media.lessThan("medium")`
    margin: 0 0.25em;
    height:  ${(props: string) => (props.small ? "40px" : "50px")} ;
    font-size:  ${(props: string) => (props.small ? "0.9em" : "1.1em")} ;
    border: 1.55px solid #fff;
    font-size : 1.1em
    width: ${(props: { one: any }) => (props.one ? "14em" : "9em")};
`};
${media.lessThan("small")`
  margin: 0 0.25em;
  height:  45px;
  border: 1.5px solid #fff;
  font-size : 1em
  width: ${(props: { one: any }) => (props.one ? "14em" : "9em")};
`};
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem 5rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`

const Community = () => {
  const Hooks = useWindowWidth()

  return (
    <Body>
      <br />
      <div>
        <BgTitle support bold>
          FOSTERING COMMUNITY INVOLVEMENT
        </BgTitle>
        <br />
      </div>

      {Hooks >= 800 ? (
        <Grid>
          {CommunityFeatures.map(({ id, title, text }) => {
            return (
              <div style={{ textAlign: "center" }}>
                <img alt="Volunteer" src={Volunteer} />
                <Title>{title}</Title>
                <Text white small>
                  {text}
                </Text>
              </div>
            )
          })}
        </Grid>
      ) : (
        <Items>
          {CommunityFeatures.map(({ id, title, text }) => {
            return (
              <Contain key={id} center>
                <img alt="Volunteer" src={Volunteer} />
                <Title>{title}</Title>
                <Text white small>
                  {text}
                </Text>
              </Contain>
            )
          })}
        </Items>
      )}
      <br />
    </Body>
  )
}

export default Community
