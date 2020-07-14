import React, { useState, useEffect } from "react"
import { Title, Text, Hover, BgTitle, BigTitle } from "../../../styles/style"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import styled from "styled-components"

const Grid = styled.div`
  height: 35vh;
  display: grid;
  grid-gap: 3rem 1rem;
  grid-template-columns: 3rem auto 3rem;
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

const MeetupWindow = styled.div`
  margin: 0rem 1rem;
  padding: 3rem 1rem;
  border-right: 1px solid #fff;
  width: ${props => (props.active ? "26rem" : "20rem")};
  height: auto;
  transition: all 600ms;
  filter: ${props =>
    props.active ? "grayscale(0%) blur(0px)" : "grayscale(90%) blur(0.9px)"};
  &: hover {
    width: 26rem;
    filter: grayscale(0%) blur(0px);
  }
`

const DistributedMeetups = (props): JSX.Element => {
  const [currentWindow, setCurrentWindow] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCurrentWindow(currentWindow =>
        currentWindow > 3 ? 0 : currentWindow + 1
      )
    }, 3000)

    return clearInterval(3000)
  }, [])

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
      <Text white> {currentWindow} </Text>
      <br />
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
            <BigTitle style={{ color: "#fff", textAlign: "center" }}>
              {" "}
              {name}{" "}
            </BigTitle>

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
    </div>
  )
}

export default DistributedMeetups
