import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  Body,
  Text,
  Title,
  Motto,
  CustomButton,
  Items,
} from "../../../styles/style"
import { IoIosArrowDown } from "react-icons/io"
import { FiExternalLink } from "react-icons/fi"

const Image = styled.img`
  width: 105px;
  height: 105px;
  margin-top: 15px;
  border: 1px solid #000;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 3px 5px;
`

const Card = styled.div`
  height: 32vh;
  border: 2px solid #c0c0c0;
  width: 25rem;
  margin-left: 33px;
  margin-top: 29px;
  border-radius: 4px;
  position : relative;
  box-shadow: ${props => (props.grey ? "0px 3px 5px" : "0px")};
        <br />
        display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;
  //filter: ${props => !props.grey && "grayscale(100%) blur(0.2px)"};
  :after {
    position : absolute;
    width : 50px;
    height : 50px;
    box-shadow: ${props => (props.grey ? "0px 3px 5px" : "0px")};
    background : #fff;
    border-left : 1.5px solid; 
    border-bottom : 1.5px solid; 
    top :  100%;
    left : 0rem;
    content : '';
    margin-top : -321px;
    margin-left : -23px;
    transform : rotate(46deg);
    fill : #fff;
  }
  ul {
    margin: 0.5rem 0.2rem;
    list-style: none;
    li {
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      margin: 0.4rem 0rem;
    }
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

const d = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

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
        <div style={{ display: "flex" }}>
          <Image src={require("../../../assets/images/users/1.png")} />
          <Card grey={currentItem === 0}>
            <ul>
              <li>
                <img
                  style={{ maxWidth: "19%", marginRight: "0.5rem" }}
                  src={require("../../../assets/svg/illustration.svg")}
                />
                <Text small> Event Data Cloud Storage </Text>
              </li>
              <hr />
              <li>
                <img
                  style={{ maxWidth: "19%" }}
                  src={require("../../../assets/svg/illustration.svg")}
                />
                <Text small> Event Data Cloud Storage </Text>
              </li>
              <hr />

              <li>
                <img
                  style={{ maxWidth: "19%" }}
                  src={require("../../../assets/svg/illustration.svg")}
                />
                <Text small> Event Data Cloud Storage </Text>
              </li>
              <hr />

              <li>
                <img
                  style={{ maxWidth: "19%" }}
                  src={require("../../../assets/svg/illustration.svg")}
                />
                <Text small> Event Data Cloud Storage </Text>
              </li>
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
            <Motto style={{ textAlign: "center" }}>
              {" "}
              Oasis Rocks For{" "}
              <span
                style={{
                  color: "#F84E06",
                  padding: "0.3rem 1rem",
                  margin: "0.3rem 0.5rem",
                  background: "#401364d4",
                  borderBottom: "5px solid #F84E06",
                }}
              >
                {" "}
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
              <CustomButton style={{ fontSize: "1.05rem" }}>
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "#fff" }}
                  target="_blank"
                >
                  <div style={{ display: "flex" }}>
                    Launch An Event
                    <div style={{ margin: "0rem 0.7rem" }}>
                      <FiExternalLink style={{ fontSize: "1.5rem" }} />
                    </div>
                  </div>
                </a>
              </CustomButton>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              marginRight: "5rem",
              justifyContent: "center",
            }}
          >
            <Image src={require("../../../assets/images/users/2.jpg")} />

            <div>
              <Card style={{ width: "20rem" }} grey={currentItem === 0}>
                <ul>
                  <li>
                    <img
                      style={{ maxWidth: "19%", marginRight: "0.5rem" }}
                      src={require("../../../assets/svg/illustration.svg")}
                    />
                    <Text small> Event Data Cloud Storage </Text>
                  </li>
                  <hr />
                  <li>
                    <img
                      style={{ maxWidth: "19%" }}
                      src={require("../../../assets/svg/illustration.svg")}
                    />
                    <Text small> Event Data Cloud Storage </Text>
                  </li>
                  <hr />

                  <li>
                    <img
                      style={{ maxWidth: "19%" }}
                      src={require("../../../assets/svg/illustration.svg")}
                    />
                    <Text small> Event Data Cloud Storage </Text>
                  </li>
                  <hr />

                  <li>
                    <img
                      style={{ maxWidth: "19%" }}
                      src={require("../../../assets/svg/illustration.svg")}
                    />
                    <Text small> Event Data Cloud Storage </Text>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <Image src={require("../../../assets/images/users/3.jpg")} />
          <Card grey={currentItem === 2}>
            <ul>
              <li>
                <img
                  style={{ maxWidth: "19%" }}
                  src={require("../../../assets/svg/illustration.svg")}
                />
                <Text small> Event Data Cloud Storage </Text>
              </li>
              <hr />
              <li>
                <img
                  style={{ maxWidth: "19%" }}
                  src={require("../../../assets/svg/illustration.svg")}
                />
                <Text small> Event Data Cloud Storage </Text>
              </li>
              <hr />

              <li>
                <img
                  style={{ maxWidth: "19%" }}
                  src={require("../../../assets/svg/illustration.svg")}
                />
                <Text small> Event Data Cloud Storage </Text>
              </li>
              <hr />

              <li>
                <img
                  style={{ maxWidth: "19%" }}
                  src={require("../../../assets/svg/illustration.svg")}
                />
                <Text small> Event Data Cloud Storage </Text>
              </li>
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
          display: "flex",
          justifyContent: "center",
          padding: "0.5rem 1rem",
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
