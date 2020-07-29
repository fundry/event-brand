import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { FiChevronRight, FiChevronLeft, FiHeart } from "react-icons/fi"
import styled from "styled-components"
import media from "styled-media-query"

import {
  Text,
  Hover,
  Title,
  Contain,
  Grid,
  Button,
  BigTitle,
  CustomButton,
} from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"
import Schedule from "../../../assets/svg/schedule.svg"
import { FaPaypal, FaStripe } from "react-icons/fa"

const TextLink = styled(Text)`
  font-size: 1.1em;
`

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 1rem 2rem;
`

const Background = styled.div`
  margin: 0;
  height: 150px;
  width: 150px;
  object-fit: cover;
  background-image: url(${props => props.img});
`

const Items = [
  { id: 1, eventName: "Concatenate Africa", tags: "Clothing , Swags" },
  { id: 2, eventName: "Open Source  Africa", tags: "Swags , Stickers" },
  { id: 3, eventName: "Foorloop Africa", tags: "Stickers , Caps" },
  { id: 4, eventName: "Concatenate Africa", tags: "Clothing , Swags" },
  { id: 5, eventName: "Open Source  Africa", tags: "Swags , Stickers" },
]

const CircleList = styled.li`
  list-style: none;
  margin: 1.3rem 0rem;
  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #f84e06;
    background: ${(props: { active: any }) =>
      props.active ? "#401364" : "transparent"};
    transition: all 400ms;
    color: ${(props: { active: any }) => (props.active ? "#fff" : "#F84E06")};
    &: hover {
      cursor: pointer;
      background: #f84e06;
      color: #fff;
    }
  }
  ${media.lessThan("huge")`
  div {
    height: 35px;
    width: 35px;
  }
  `};
  ${media.lessThan("large")`
  div {
  height: 30px;
  width: 30px;
  }
  `};
  ${media.lessThan("medium")`
  div {
    height: 25px;
  width: 25px;
  }
  `};
  ${media.lessThan("small")`
  div {
    height: 20px;
  width: 20px;
  }
  `};
`

const List = styled.ul`
  list-style: none;
  margin: 0rem 0.5rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  li {
    margin: 0rem 1rem;
    cursor: pointer;
  }
`

const Ecommerce = () => {
  const [currentItem, setCurrentItem] = useState(1)

  const Cart = styled.div`
    height: auto;
    width: 17rem;
    padding: 1rem 0.8rem;
    border-radius: 15px 15px 0px 0px;
    transition: all 800ms;
    background: ${props =>
      props.item === currentItem ? "#f2f5ff" : "transparent"};
  `

  useEffect(() => {
    setInterval(() => {
      setCurrentItem(currentItem => (currentItem > 4 ? 1 : currentItem + 1))
    }, 3000)

    return clearInterval(3000)
  }, [])

  return (
    <div>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridGap: "1rem 4rem",
          padding: "0rem 0rem",
        }}
      >
        <div
          style={{
            textAlign: "left",
            paddingLeft: "5rem",
            marginRight: "8rem",
            background: "#f2f5ff",
            color: "#2153cc",
          }}
        >
          <br /> <br />
          <br />
          <h2 style={{ fontWeight: "normal", fontSize: "2.2rem" }}>
            In - Event Attendee <br />
            Marketplace
          </h2>
          <br />
          <Link
            to="/docs/service"
            style={{ textAlign: "right", textDecoration: "none" }}
          >
            <CustomButton>Learn More</CustomButton>
          </Link>
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ margin: "0rem 1rem" }}>Integrateable with :</Text>
            </div>

            <List>
              <li>
                <Hover>
                  <FaPaypal style={{ fontSize: "3rem" }} />
                </Hover>
              </li>

              <li>
                <Hover>
                  <FaStripe style={{ fontSize: "4.6rem" }} />
                </Hover>
              </li>

              <li>
                <Hover>
                  <FaPaypal style={{ fontSize: "3rem" }} />
                </Hover>
              </li>
            </List>
          </div>
        </div>

        <div style={{ textAlign: "right", paddingRight: "15rem" }}>
          <br />
          <br />
          <Title heightened bold>
            More Value For Just Less
          </Title>
          <Contain>
            <Text small white>
              Leverage your event marketplace provided to your event to create,
              advertise and accept payment for event items and Swags.
              <br />
              <br />
              Leverage your event marketplace provided to your event to create,
              advertise and accept payment for event items and Swags.
            </Text>
            <br />
          </Contain>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2rem auto 2rem",
          gridGap: "0rem 1rem",
          padding: "0rem 1rem",
        }}
      >
        <Hover
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiChevronLeft style={{ fontSize: "4rem", color: "#fff" }} />
        </Hover>

        <CartGrid>
          {Items.map(({ id, eventName, tags }) => {
            return (
              <Cart key={id} item={id}>
                {currentItem === id ? (
                  <div>
                    {" "}
                    <div
                      style={{
                        marginBottom: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Hover style={{ display: "flex" }}>
                        <Title
                          style={{
                            color: " #22263d",
                            fontSize: "1.2rem",
                            textAlign: "center",
                          }}
                          small
                        >
                          {eventName}
                        </Title>
                      </Hover>
                    </div>
                    <Background
                      img={require(`../../../assets/images/commerce/${id}.jpg`)}
                      style={{
                        display: "flex",
                        flex: 1,
                        width: "auto",
                        backgroundSize: "cover",
                        margin: "1rem 0rem",
                      }}
                    >
                      <Hover>
                        <FiHeart style={{ fontSize: "1.4rem" }} />
                      </Hover>
                    </Background>
                    <Text style={{ textAlign: "center" }}>
                      Sneakers <br />{" "}
                      <span style={{ color: "grey", fontSize: "1rem" }}>
                        {tags}
                      </span>
                    </Text>
                    <a
                      target="_blank"
                      href="/docs/service"
                      style={{ textDecoration: "none" }}
                    >
                      <Text small bold>
                        View Event
                      </Text>
                    </a>
                  </div>
                ) : (
                  <img
                    style={{
                      objectFit: "cover",
                      backgroundSize: "cover",
                      height: "370px",
                      width: "370px",
                      borderRadius: "15px 15px 0px 0px",
                    }}
                    src={require(`../../../assets/images/commerce/${id}.jpg`)}
                  />
                )}
              </Cart>
            )
          })}
        </CartGrid>

        <Hover
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiChevronRight style={{ fontSize: "4rem", color: "#fff" }} />
        </Hover>
      </div>
    </div>
  )
}

export default Ecommerce
