import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import media from "styled-media-query"

import { Text, CustomButton, Title, HeadTitle } from "../../../styles/style"
import Sample from "../../../assets/svg/illustration.svg"
import Ipad from "../../../assets/svg/ipad.svg"
import CommunityBckg from "../../../assets/svg/community.svg"
import useWindowWidth from "../../../styles/resize"

const Body = styled.div`
  padding: 2rem 5rem;
  color: #fff;
  background-image: url(${(props: { img: any }) => props.img});
  background-position: center;
  object-fit: center;
`

const Community = () => {
  const Hooks = useWindowWidth()

  return (
    <Body img={CommunityBckg}>
      <HeadTitle align="center">
        Oasis Extends Beyond
        <span
          style={{
            margin: "0rem 0.6rem",
            textDecoration: "underline",
            textDecorationStyle: "wavy",
            textDecorationColor: "#F84E06",
          }}
        >
          {" "}
          Organizing Events.
        </span>
      </HeadTitle>

      <br />
      <br />
      <HeadTitle>
        Fostering{" "}
        <span style={{ color: "#F84E06" }}> Community Involvement.</span>
      </HeadTitle>

      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40% 60%",
            gridGap: "0rem 10rem",
          }}
        >
          <div style={{ marginTop: "4rem" }}>
            <Title> Participate in Events as a Volunteer </Title>

            <Text small white>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              cupiditate eligendi quisquam quam impedit. reiciendis ex eveniet
              ad dicta assumenda, ratione veniam saepe. Quos officiis ab eum,
              nobis atque perferendis.
            </Text>

            <div>
              <CustomButton> View Open Roles </CustomButton>
            </div>
          </div>

          <img
            style={{ height: "400px", maxWidth: "60%" }}
            alt="illustration"
            src={Sample}
          />
        </div>
        <br />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40% 60%",
            gridGap: "0rem 10rem",
          }}
        >
          <div style={{ marginTop: "4rem" }}>
            <Title> Public Speaking and Writing </Title>

            <Text small white>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              cupiditate eligendi quisquam quam impedit, reiciendis ex eveniet
              ad dicta assumenda, ratione veniam saepe. Quos officiis ab eum,
              nobis atque perferendis.
            </Text>

            <div>
              <CustomButton wide> Create A Talk Draft </CustomButton>
            </div>
          </div>

          <img
            style={{ height: "400px", maxWidth: "60%" }}
            alt="illustration"
            src={Ipad}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40% 60%",
            gridGap: "0rem 10rem",
          }}
        >
          <div style={{ marginTop: "6rem" }}>
            <Title> Transparent Talk Draft Process </Title>

            <Text small white>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              cupiditate eligendi quisquam quam impedit, reiciendis ex eveniet
              ad dicta assumenda, ratione veniam saepe. Quos officiis ab eum,
              nobis atque perferendis.
            </Text>

            <div>
              <CustomButton wide> View Open Call For Speakers </CustomButton>
            </div>
          </div>

          <img
            style={{ height: "400px", maxWidth: "60%" }}
            alt="illustration"
            src={Sample}
          />
        </div>
      </div>
    </Body>
  )
}

export default Community
