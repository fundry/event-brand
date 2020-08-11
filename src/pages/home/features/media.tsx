import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { FiMail, FiUsers, FiDatabase } from "react-icons/fi"
import styled from "styled-components"
import media from "styled-media-query"
import { CSSTransition } from "react-transition-group"

import Ecommerce from "./ecommerce"
import {
  Text,
  Hover,
  Title,
  Contain,
  Button,
  BigTitle,
  Grid,
  Items,
} from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"
import Schedule from "../../../assets/svg/schedule.svg"

const Item = styled.div`
  height: auto;
  width: auto;
  padding: 0.5rem 1rem;
  display: flex;
  transition: all 450ms;
  border: 1px solid ${props => (props.active ? "#fff" : "grey")};
  border-radius: 30px;
  margin: 0rem 1rem;
  &: hover {
    cursor: pointer;
    border: 1px solid #fff;
  }
`

const SmallScreenGrid = styled.div`
  display: none;
  ${media.lessThan("large")`
  display : grid;
  grid-template-columns : repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap : 1rem 2rem;
  padding : 0 1rem;
  `};
  ${media.lessThan("medium")`
    padding : 0 2rem;
  `};
  ${media.lessThan("small")`
    padding : 0 1rem;
  `};
`

const Container = styled.div`
  ${media.lessThan("large")`
      display : none
    `}
`

const Data = [
  {
    id: 1,
    name: "Event Cloud Data",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque accusamus voluptatem, iste iure quaerat!",
  },
  {
    id: 1,
    name: "Event Cloud Data",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque accusamus voluptatem, iste iure quaerat!",
  },
  {
    id: 1,
    name: "Event Cloud Data",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque accusamus voluptatem, iste iure quaerat!",
  },
]

const Features = styled.div`
  display: grid;
  padding: 7rem 1rem;
  grid-gap: 1rem 5rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`

const Circle = styled.div`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  background: violet;
  border: 1px solid violet;
`

const Media = () => {
  const [currentItem, setCurrentItem] = useState(1)
  const [activeView, setActiveView] = useState("cloud")

  useEffect(() => {
    setInterval(() => {
      setCurrentItem(currentItem => (currentItem > 4 ? 1 : currentItem + 1))
    }, 3000)

    return clearInterval(3000)
  }, [])
  return (
    <div>
      <Container>
        <Contain
          style={{
            margin: "0rem 1rem",
            padding: "0",
            color: "#fff",
            borderRadius: "8px",
            background: "#2153cc",
          }}
        >
          <Features>
            {Data.map(({ id, name, text }) => {
              return (
                <div style={{ padding: "0 1rem" }}>
                  <div
                    style={{
                      padding: "1rem 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Circle />
                  </div>
                  <Title small center>
                    {name}{" "}
                  </Title>
                  <Text center white>
                    {text}{" "}
                  </Text>
                </div>
              )
            })}
          </Features>

          <Ecommerce />
        </Contain>
      </Container>
    </div>
  )
}

export default Media
