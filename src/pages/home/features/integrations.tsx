import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Body, Text, BigTitle } from "../../../styles/style"
import { FiArrowRight, FiTrello, FiYoutube } from "react-icons/fi"
import media from "styled-media-query"
import { FaTwitch, FaDiscord, FaJira, FaSlack } from "react-icons/fa"
import { IoLogoSlack, IoLogoVimeo } from "react-icons/io"

const OpaqueButton = styled.button`
  padding: 0.6rem 0.5rem;
  color: #401364;
  border: 0px;
  outline: 0px;
  font-size: 1.1rem;
  display: flex;
  border-radius: 10px;
  transition: all 500ms;
  &: hover {
    background: #401364;
    color: #fff;
    border-radius: 15px;
  }
  ${media.lessThan("large")`
  border-radius: 10px;
`};
  ${media.lessThan("medium")`
border-radius:  7px;
font-size: 1.05rem;
margin-right : 55px;
padding: 0.6rem 0.5rem;
&: hover {
  border-radius: 9px;
}
`};
  ${media.lessThan("small")`
border-radius:  7px;
font-size: 1rem;
margin-right : 40px;
padding: 0.6rem 0.5rem;
&: hover {
  border-radius: 9px;
}
`};
`

const Item = styled.div`
  height: auto;
  width: auto;
  display: flex;
  padding: 0.4rem 1.2rem;
  border: 1px solid grey;
  border-radius: 30px;
  margin: 0rem 1rem;
  &: hover {
    cursor: pointer;
    border: 1px solid #fff;
  }
`

export default class Integrations extends Component {
  state = {
    opacity: 0,
  }

  // componentDidMount() {
  //   //@ts-ignore
  //   this.observer = new window.IntersectionObserver(this.observerCallback, {
  //     threshold: 0.5,
  //   })

  //   //@ts-ignore
  //   this.observer.observe(this.container)
  // }

  // //@ts-ignore
  // observerCallback = entries => {
  //   setTimeout(() => {
  //     const entry = entries.slice(0).shift()
  //     if (entry.isIntersecting) {
  //       this.setState({
  //         opacity: 1,
  //       })
  //     }
  //   }, 50)
  // }

  // componentWillUnmount() {
  //   //@ts-ignore
  //   this.observer.unobserve(this.container)
  // }

  render() {
    const d = [
      {
        id: 1,
        name: "Eventbrite",
        icon: <FiTrello style={{ fontSize: "1.6rem" }} />,
      },
      {
        id: 2,
        name: "Jira",
        icon: <FaJira style={{ fontSize: "1.6rem" }} />,
      },
      {
        id: 1,
        name: "Trello",
        icon: <FiTrello style={{ fontSize: "1.6rem" }} />,
      },
      {
        id: 1,
        name: "Twitch",
        icon: <FaTwitch style={{ fontSize: "1.6rem" }} />,
      },
      {
        id: 1,
        name: "Discord",
        icon: <FaDiscord style={{ fontSize: "1.6rem" }} />,
      },
      {
        id: 1,
        name: "Youtube",
        icon: <FiYoutube style={{ fontSize: "1.6rem" }} />,
      },
      {
        id: 1,
        name: "Slack",
        icon: <IoLogoSlack style={{ fontSize: "1.6rem" }} />,
      },
    ]

    return (
      <Body>
        <br />
        <br />
        <br />
        <br />

        <BigTitle style={{ textAlign: "center" }}>
          Your External Tools, Pulled Into Your Event. <br />A Perfect Symphony!
        </BigTitle>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Text style={{ width: "40rem" }} center small>
            Oasis gives you the power to sync your actions on Oasis with your
            external workflow. So when next you create an event on Discord, you
            can manage it on Oasis!{" "}
          </Text>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/docs/tools" style={{ textDecoration: "none" }}>
            <OpaqueButton>
              Learn more about integrations
              <div style={{ margin: "0rem 0.1rem" }}>
                <FiArrowRight style={{ fontSize: "1.6rem" }} />
              </div>
            </OpaqueButton>
          </Link>
        </div>
        <br />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {d.map(({ id, icon, name }) => {
            return (
              <Item key={id}>
                <div style={{ margin: "0rem 0.5rem" }}>{icon}</div> {name}{" "}
              </Item>
            )
          })}
        </div>
        <br />
      </Body>
    )
  }
}
