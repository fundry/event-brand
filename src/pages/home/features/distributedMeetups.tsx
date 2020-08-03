import React, { useState, useEffect, Component } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import styled from "styled-components"
import media from "styled-media-query"

import { Title, Text, Hover, BgTitle, BigTitle } from "../../../styles/style"

const name = "Open Source Community Africa"

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

const Card = styled.div`
  height: 45vh;
  width: 20rem;
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  border-radius: 0 15px 15px 0;
  border: 1px sold #fff;
  background: #fff;
  transition: all 400ms;
  box-shadow: 0 2px 3px grey;
  &: hover {
    transform: translateY(-10%);
  }
`

const DistributedMeetups = (props: { isInView: boolean }): JSX.Element => {
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
      <br />

      <div style={{ display: "flex" }}>
        <Card>
          <Text center> Open Source Community Delta </Text>
        </Card>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card style={{ height: "35vh" }}>
            <Text center> Open Source Community Delta </Text>
          </Card>
        </div>
      </div>
    </div>
  )
}
