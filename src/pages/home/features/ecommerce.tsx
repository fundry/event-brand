import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FiEye, FiChevronRight, FiChevronLeft, FiHeart } from "react-icons/fi"
import styled from "styled-components"
import media from "styled-media-query"

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
  transition all 500ms;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 1rem 2rem;
  @media (max-width: 1700px) {
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
     padding: 0.3rem 0.5rem;
 }
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

const Image = styled.img`
  object-fit: cover;
  background-size: cover;
  filter: drop-shadow(3px 6px 10px hsla(0deg, 0%, 0%, 0.5));
  height: 370px;
  width: 370px;
  border-radius: 15px 15px 0px 0px;
  @media (max-width: 1700px) {
    height: 250px;
    width: 250px;
  }
`

const MerketPlaceContainer = styled.div`
  text-align: left;
  padding-left: 2rem;
  margin-right: 10rem;
  background: #f2f5ff;
  color: #2153cc;
  button {
    font-size: 1.1rem;
    width: 15rem;
  }
  h4 {
    font-size: 2rem;
  }
  ${media.lessThan("huge")`
margin-right: 5rem;
h4 {
  font-size : 1.8rem;
}
`}
`

const Ecommerce = () => {
  const [currentItem, setCurrentItem] = useState(1)

  const Cart = styled.div`
    height: auto;
    width: 17rem;
    padding: 0.3rem 0.8rem;
    border-radius: 15px 15px 0px 0px;
    transition all 500ms;
    background: ${props =>
      props.item === currentItem ? "#f2f5ff" : "transparent"};
      @media (max-width: 1700px) {
         width: 14rem;
      padding: 0.3rem 0.5rem;

      }
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
        <MerketPlaceContainer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <br /> <br />
              <br />
              <Title style={{ fontWeight: "lighter" }}>
                In - Event Attendee <br />
                Marketplace
              </Title>
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
                  <Text style={{ margin: "0rem 0.5rem" }}>Together with :</Text>
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
        </MerketPlaceContainer>

        <div style={{ textAlign: "right", paddingRight: "7rem" }}>
          <br />
          <br />
          <Title heightened bold>
            More Value For Just Less
          </Title>
          <Contain>
            <Text style={{ textAlign: "justify" }} small white>
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
                          marginBottom: "15px",
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
                  <Text bold small style={{ textAlign: "center" }}>
                    Sneaker
                  </Text>
                </div>
              ) : (
                <Image
                  src={require(`../../../assets/images/commerce/${id}.jpg`)}
                />
              )}
            </Cart>
          )
        })}
      </CartGrid>
    </div>
  )
}

export default Ecommerce
