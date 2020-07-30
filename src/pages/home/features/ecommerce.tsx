import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FiChevronRight, FiChevronLeft, FiHeart } from "react-icons/fi"
import styled from "styled-components"

import {
  Text,
  Hover,
  Title,
  Contain,
  CustomButton,
} from "../../../styles/style"
import { FaPaypal, FaStripe } from "react-icons/fa"

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 1rem 2rem;
`

const Background = styled.div`
  margin: 0;
  height: 200px;
  width: 200px;
  transition: all 500ms;
  img {
    max-width: 100%;
    object-fit: contain;
    max-height: 100%;
  }
  &: hover {
    img {
      transform: scale(1.5);
    }
  }
`

const Items = [
  { id: 1, eventName: "Concatenate Africa", tags: "Clothing , Swags" },
  { id: 2, eventName: "Open Source  Africa", tags: "Swags , Stickers" },
  { id: 3, eventName: "Foorloop Africa", tags: "Stickers , Caps" },
  { id: 4, eventName: "Concatenate Africa", tags: "Clothing , Swags" },
  { id: 5, eventName: "Open Source  Africa", tags: "Swags , Stickers" },
]

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
    padding: 0.3rem 0.8rem;
    border-radius: 15px 15px 0px 0px;
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginLeft: "2rem" }}>
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
                  <Text style={{ margin: "0rem 1rem" }}>
                    Integrateable with :
                  </Text>
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
            <img
              style={{ margin: "0.5rem", height: "400px" }}
              src={require("../../../assets/svg/line.svg")}
            />
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
                    <div
                      style={{
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Background>
                        <img
                          src={require(`../../../assets/images/commerce/${id}.jpg`)}
                        />
                      </Background>
                    </div>
                    <Text small style={{ textAlign: "center" }}>
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
