import React, { useState, useEffect, Component } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import styled from "styled-components"
import media from "styled-media-query"

import { Title, Text, Hover, BgTitle, BigTitle } from "../../../styles/style"

const Grid = styled.div`
  height: 35vh;
  display: grid;
  grid-gap: 3rem 1rem;
  grid-template-columns: 3rem auto 3rem;
  ${media.lessThan("large")`
      display: none;
  `}
  ${media.lessThan("medium")`
  display: none;
  `}
`

const name = "Open Source Community Africa"

const Meetups = [
  {
    id: 1,
    name: "Open Source Community Lagos",
    summary: "Open Source Community for Lagos State",
  },
  {
    id: 2,
    name: "Open Source Community Benin",
    summary: "Open Source Community for Benin State",
  },
  {
    id: 3,
    name: "Open Source Community Delta",
    summary: "Open Source Community for Delta State",
  },
  {
    id: 4,
    name: "Open Source Community Uyo",
    summary: "Open Source Community for Uyo State",
  },
]

const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #fff;
  ${media.greaterThan("large")`
      display: none;
  `}
`

const CircleGrid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  margin: 1rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
`

export default class DistributedMeetupsObserver extends Component {
  state = {
    isInView: false,
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
          isInView: true,
        })
      } else {
        this.setState({
          isInView: false,
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
      <div ref={(node: any) => (this.container = node)}>
        <DistributedMeetups isInView={this.state.isInView} />
      </div>
    )
  }
}

const DistributedMeetups = (props: { isInView: boolean }) => {
  const { isInView } = props
  const [currentWindow, setCurrentWindow] = useState(0)

  useEffect(() => {
    if (isInView) {
      setInterval(() => {
        setCurrentWindow(currentWindow =>
          currentWindow > 3 ? 0 : currentWindow + 1
        )
      }, 3000)
    }
    return clearInterval(3000)
  }, [isInView])

  const MeetupWindow = styled.div`
    margin: 0rem 0.5rem;
    padding: 3rem 0.5rem;
    border-right: 1px solid #fff;
    width: ${(props: any) => (props.active ? "26rem" : "20rem")};
    height: auto;
    transition: all 600ms;
    filter: ${(props: any) =>
      props.active ? "grayscale(0%) blur(0px)" : "grayscale(90%) blur(0.9px)"};
    &: hover {
      width: 26rem;
      filter: grayscale(0%) blur(0px);
    }
  `

  return (
    <div>
      <br />
      <BigTitle style={{ color: "#fff", textAlign: "center" }}>
        Regionally{" "}
        <span
          style={{
            textDecoration: "underline",
            textDecorationColor: "#22263d",
            textDecorationStyle: "wavy",
          }}
        >
          {" "}
          Distributed{" "}
        </span>{" "}
        Meetup Groups
      </BigTitle>
      <Text white small center>
        Create Multiple groups of your event across different regions to reach a
        far greater audience. <br />
        Meetup Groups are quick and easy to setup and launch as they inherit the
        features of the parent event.
      </Text>
      <br />
      <BigTitle style={{ color: "#fff", textAlign: "center" }}>{name}</BigTitle>
      <Grid>
        <Hover
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoIosArrowBack style={{ fontSize: "3rem" }} />
        </Hover>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                overflow: "auto",
                width: "auto",
              }}
            >
              {Meetups.map(({ id, name, summary }) => {
                return (
                  <MeetupWindow active={id === currentWindow} key={id}>
                    <div>
                      <Title style={{ cursor: "pointer" }} center>
                        {" "}
                        <a
                          style={{ textDecoration: "none" }}
                          href="https://opensourcecommunity.com"
                        >
                          {" "}
                          {name}{" "}
                        </a>{" "}
                      </Title>
                      <Text white center>
                        {" "}
                        {summary}{" "}
                      </Text>
                    </div>
                  </MeetupWindow>
                )
              })}
            </div>
          </div>
        </div>

        <Hover
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoIosArrowForward style={{ fontSize: "3rem" }} />
        </Hover>
      </Grid>

      <CircleGrid>
        {Meetups.map(() => {
          return <Circle></Circle>
        })}
      </CircleGrid>
    </div>
  )
}
