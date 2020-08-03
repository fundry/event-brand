import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { IoIosArrowDown } from "react-icons/io"
import { FiExternalLink } from "react-icons/fi"
import media from "styled-media-query"

import { Text, Title, Motto, CustomButton } from "../../../styles/style"

const Image = styled.img`
  width: 105px;
  height: 105px;
  margin-top: 10px;
  border: 1px solid #000;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 3px 5px;
  @media (max-width: 1700px) {
    width: 90px;
    height: 90px;
  }
`

const Card = styled.div`
  height: 27vh;
  border: ${props => !props.grey && "2px solid #c0c0c0"};
  width: 20rem;
  margin-left: 15px;
  margin-top: 29px;
  border-radius: ${props => props.borderRadius};
  position: relative;
  box-shadow: ${props => (props.grey ? "0px 3px 5px" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;
  ul {
    margin: 0.5rem 0.2rem;
    list-style: none;
  }
  @media (max-width: 1700px) {
    height: 33.5vh;
    width: 14.5rem;
    margin-top: 26px;
  }
  ${media.lessThan("huge")`
  `};
  ${media.lessThan("large")`
  `};
  ${media.lessThan("medium")`
  `};
`

const Circle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: ${props => props.background};
`

const List = styled.li`
  display: flex;
  flex: 1;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  margin: 0;
  border-bottom: ${props => props.item < 4 && "1px solid #c0c0c0"};
  padding: 0.7rem 0;
  p {
    margin: 0 12px;
    font-size: 1rem;
  }
`

const HoverCircle = styled.div`
  margin: 0rem 0.7rem;
  &: hover {
    cursor: pointer;
  }
`

const Item = styled.div`
  height: auto;
  width: auto;
  padding: 0.5rem 1.5rem;
  border: 1px solid grey;
  border-radius: 20px;
  margin: 0rem 1rem;
  &: hover {
    cursor: pointer;
    border: 1px solid #fff;
  }
`

const data = {
  organizers: [
    {
      id: 1,
      feature: "Custom event pages",
    },
    {
      id: 2,
      feature: "Event Cloud Storage",
    },
    {
      id: 3,
      feature: "Inclusive Talk Process ",
    },
    {
      id: 4,
      feature: "In Event Marketplace",
    },
  ],
  streamers: [
    {
      id: 1,
      feature: "Stream data history",
    },
    {
      id: 2,
      feature: "Event Cloud Storage",
    },
    {
      id: 3,
      feature: "Event Cloud Storage",
    },
    {
      id: 4,
      feature: "Event Cloud Storage",
    },
  ],
  speakers: [
    {
      id: 1,
      feature: "Store  Talk Drafts",
    },
    {
      id: 2,
      feature: "Talk drafts, review",
    },
    {
      id: 3,
      feature: "Talk draft templates",
    },
    {
      id: 4,
      feature: "Event Cloud Storage",
    },
  ],
}
const d = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
const { speakers, streamers, organizers } = data

const Users = () => {
  const [currentItem, setCurrentItem] = useState<number>(0)
  const words = ["Organizers", "Speakers", "Streamers", "Everybody!"]

  useEffect(() => {
    setInterval(() => {
      setCurrentItem(currentItem => (currentItem > 2 ? 0 : currentItem + 1))
    }, 3000)
    return () => clearInterval(3000)
  }, [])

  return (
    <div style={{ background: "transparent" }}>
      <br />

      <div
        style={{
          padding: "0rem 2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ textAlign: "left" }}>
            <Image src={require("../../../assets/images/users/1.png")} />
          </div>
          <Card borderRadius="0 15px 15px 15px" grey={currentItem === 0}>
            <ul>
              {organizers.map(({ id, feature }) => {
                return (
                  <List item={id} key={id}>
                    <Circle background="violet" />
                    <p> {feature} </p>
                  </List>
                )
              })}
            </ul>
          </Card>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0rem",
          }}
        >
          <div>
            <Motto style={{ fontWeight: "lighter", textAlign: "center" }}>
              A Sustainable Launchpad for
              <span
                style={{
                  color: "#F84E06",
                  padding: "0.3rem 2rem",
                  margin: "0.3rem 0.5rem",
                  background: "#401364d4",
                  borderBottom: "5px solid #F84E06",
                }}
              >
                {words[currentItem]}
              </span>{" "}
            </Motto>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text style={{ textAlign: "center", width: "85%" }}>
                Leverage tools built within Oasis to redefine the regular event
                experience for your event team and your attendees.
              </Text>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <CustomButton style={{ fontSize: "1rem" }}>
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "#fff" }}
                  target="_blank"
                >
                  <div style={{ display: "flex" }}>
                    Open Oasis Web Console
                    <div style={{ margin: "0rem 0.7rem" }}>
                      <FiExternalLink style={{ fontSize: "1.3rem" }} />
                    </div>
                  </div>
                </a>
              </CustomButton>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2rem",
              marginRight: "2rem",
              justifyContent: "center",
            }}
          >
            <Image src={require("../../../assets/images/users/2.jpg")} />

            <div>
              <Card
                borderRadius="0 15px 15px 15px"
                style={{ width: "15rem" }}
                grey={currentItem === 0}
              >
                <ul>
                  {speakers.map(({ id, feature }) => {
                    return (
                      <List item={id} key={id}>
                        <Circle background="violet" />
                        <p> {feature} </p>
                      </List>
                    )
                  })}
                </ul>
              </Card>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ textAlign: "right" }}>
            <Image src={require("../../../assets/images/users/3.jpg")} />
          </div>
          <Card borderRadius="15px 0 15px 15px" grey={currentItem === 2}>
            <ul>
              {streamers.map(({ id, feature }) => {
                return (
                  <List item={id} key={id}>
                    <Circle background="violet" />
                    <p> {feature} </p>
                  </List>
                )
              })}
            </ul>
          </Card>
        </div>
      </div>

      <div style={{ padding: "0.3rem 2rem" }}>
        <div
          style={{
            borderBottom: "1px solid #c0c0c0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <Title small center>
              Openly trusted by ;
            </Title>
          </div>

          <div style={{ display: "flex" }}>
            <Text small center>
              Scroll Down To Learn More
            </Text>
            <HoverCircle>
              <IoIosArrowDown style={{ fontSize: "1.9rem" }} />
            </HoverCircle>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          margin: "0 1.8rem",
          padding: "0.7rem 5rem",
          overflowX: "scroll",
          justifyContent: "center",
        }}
      >
        {d.map(() => {
          return <Item>Organization</Item>
        })}
      </div>
    </div>
  )
}

export default Users
