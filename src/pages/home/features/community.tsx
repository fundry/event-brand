import React, { Component } from "react"
import styled from "styled-components"

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 0rem 10rem;
  transition : all 500ms;
  img { transition : 'all 600ms' , 
    height: 400px;
    max-width: 60%;
    margin: 0rem 4rem;
  }
`

export default class community extends Component {
  state = {
    transform: 30,
    imgTransform: 80,
  }

  componentDidMount() {
    //@ts-ignore
    this.observer = new window.IntersectionObserver(this.observerCallback, {
      threshold: 0.5,
    })

    //@ts-ignore
    this.observer.observe(this.container)
  }

  //@ts-ignore
  observerCallback = entries => {
    setTimeout(() => {
      const entry = entries.slice(0).shift()
      if (entry.isIntersecting) {
        this.setState({
          transform: 0,
          imgTransform: 10,
        })
      }
    }, 50)
  }

  componentWillUnmount() {
    //@ts-ignore
    this.observer.unobserve(this.container)
  }

  render() {
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
            Organizing Events.
          </span>
        </HeadTitle>

        <br />
        <br />
        <HeadTitle>
          Fostering{" "}
          <span style={{ color: "#F84E06" }}> Community Involvement.</span>
        </HeadTitle>

        <div ref={(node: any) => (this.container = node)}>
          <Grid>
            <div
              style={{
                marginTop: "2rem",
                transition: "all 800ms",
                transform: `translate(${this.state.transform}%)`,
              }}
            >
              <Title> Participate in Events as a Volunteer </Title>

              <Text small white>
                Events organized on Oasis have a full support for volunteers
                with the ability to create roles for volunteers to fill and
                accept applied roles.
                <br />
                <br />
                Now you can participate actively in the organizing of your
                favourite events when you check for events currently accepting
                volunteers or facillitators.
              </Text>

              <div>
                <CustomButton> View Open Roles </CustomButton>
              </div>
            </div>

            <img
              alt="illustration"
              src={Sample}
              style={{
                transition: "all 800ms",
                transform: `translate(${this.state.imgTransform}%)`,
              }}
            />
          </Grid>
          <br />
          <Grid>
            <div
              style={{
                transition: "all 800ms",
                marginTop: "4rem",
                transform: `translate(-${this.state.transform}%)`,
              }}
            >
              <Title> Public Speaking and Writing </Title>

              <Text small white>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate eligendi quisquam quam impedit, reiciendis
                ex eveniet ad dicta assumenda, ratione veniam saepe. Quos
                officiis ab eum, nobis atque perferendis.
              </Text>

              <div>
                <CustomButton wide> Create A Talk Draft </CustomButton>
              </div>
            </div>

            <img
              alt="illustration"
              src={Ipad}
              style={{
                transition: "all 800ms",
                transform: `translate(${this.state.imgTransform}%)`,
              }}
            />
          </Grid>
          <br />

          <Grid>
            <div style={{ marginTop: "6rem" }}>
              <Title> Transparent Talk Draft Process </Title>

              <Text small white>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate eligendi quisquam quam impedit, reiciendis
                ex eveniet ad dicta assumenda, ratione veniam saepe. Quos
                officiis ab eum, nobis atque perferendis.
              </Text>

              <div>
                <CustomButton wide> View Open Call For Speakers </CustomButton>
              </div>
            </div>

            <img alt="illustration" src={Sample} />
          </Grid>
        </div>
        <br />
      </Body>
    )
  }
}
