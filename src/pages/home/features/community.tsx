import React from "react"
import Flex from "styled-flex-component"

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

const Community = () => {
  const Hooks = useWindowWidth()

  return (
    <Body>
      <Body>
        <br />
        <BgTitle center support bold>
          Fostering Community Involement
        </BgTitle>

        {Hooks >= 800 ? (
          <Flex justifyBetween>
            {CommunityFeatures.map(({ id, title, text }) => {
              return (
                <Contain key={id} center>
                  <img alt="Volunteer" src={Volunteer} />
                  <Title center small>
                    {title}{" "}
                  </Title>
                  <Text small />
                </Contain>
              )
            })}
          </Flex>
        ) : (
          <Items>
            {CommunityFeatures.map(({ id, title, text }) => {
              return (
                <Contain key={id} center>
                  <img alt="Volunteer" src={Volunteer} />
                  <Title center small>
                    {title}{" "}
                  </Title>
                  <Text small />
                </Contain>
              )
            })}
          </Items>
        )}
      </Body>
    </Body>
  )
}

export default Community
