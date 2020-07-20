import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import {
  FiGithub,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiMail,
} from "react-icons/fi"
import { IoIosSend } from "react-icons/io"
import { Link } from "gatsby"

import {
  Text,
  Footer as FooterBody,
  FooterColumnHead,
  Hover,
  FooterList,
  Brand,
  CustomButton,
} from "../../styles/style"

const HoverCircle = styled(Hover)`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  margin: 0rem 0.5rem;
  align-items: center;
  border: 1px solid #f84e06;
  box-shadow: 0px 3px 4px #000;
  a {
    color: #fff;
  }
`

interface CustomProps {
  showLaunchEvent: boolean
}

const Footer = (props: CustomProps): JSX.Element => {
  const { showLaunchEvent } = props

  const Testing = styled.div`
    text-align: center;
    display: flex;
    height: 30vh;
    flex-direction: column;
    justify-content: center;
    background: #0e2f5a;
    padding: 1rem;
    color: #fff;
    div {
      text-align: center;
    }
  `
  const InputBox = styled.div`
    display: flex;
    width: 35rem;
    background: #fff;
    input {
      display: flex;
      flex: 1;
      width: auto;
      color: #0e2f5a;
      font-size: 1.1rem;
      padding: 1rem 1rem;
      border: 1px solid #fff;
      background: transparent;
      outline: 1px solid #0e2f5a;
    }
    div {
      height: auto;
      width: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f84e06;
      cursor: pointer;
    }
  `

  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const handleResize = (value: React.SetStateAction<null>) => {
    setWidth(value)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize.bind(this))
    return () => window.removeEventListener("resize", handleResize.bind(this))
  }, [])

  const FooterLink = (props: any) => {
    return (
      <Link to={props.to} style={{ textDecoration: "none" }}>
        <Text white small>
          {props.text}
        </Text>
      </Link>
    )
  }

  return (
    <div>
      {showLaunchEvent ? null : (
        <Testing>
          <div>
            <Text white>
              Thinking of Organizing an event? <br />
              Oasis is flexible enough to upscale and downscale automatically to
              fit your event needs.
            </Text>

            <span style={{ display: "flex", justifyContent: "center" }}>
              <InputBox>
                <input placeholder="Let's contact you via an email." />
                <div>
                  <IoIosSend
                    style={{ transform: "rotate(42deg)", fontSize: "2rem" }}
                  />
                </div>
              </InputBox>
            </span>
          </div>
        </Testing>
      )}
      <FooterBody>
        <br />

        {Width >= 800 ? (
          <div style={{ padding: "2rem 0.5rem" }}>
            <Flex justifyAround>
              <div>
                <br />
                <Brand style={{ color: "#fff", textAlign: "center" }}>
                  Oasis For Events
                </Brand>

                <Flex justifyAround>
                  <HoverCircle padded>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiFacebook style={{ fontSize: "2rem" }} />
                    </a>
                  </HoverCircle>

                  <HoverCircle padded>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiTwitter style={{ fontSize: "2rem" }} />
                    </a>
                  </HoverCircle>

                  <HoverCircle padded>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiInstagram style={{ fontSize: "2rem" }} />
                    </a>
                  </HoverCircle>

                  <HoverCircle padded>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiMail style={{ fontSize: "2rem" }} />
                    </a>
                  </HoverCircle>
                </Flex>
              </div>
              <FooterList>
                <FooterColumnHead> PRODUCT </FooterColumnHead>
                <FooterLink text={" Create Team"} />
                <FooterLink text={"Documentation"} />
                <FooterLink text={"Biling"} />
              </FooterList>
              <FooterList>
                <FooterColumnHead> HELP </FooterColumnHead>
                <FooterLink text={"Integrations"} />
                <FooterLink text={"Contact Support"} />
                <FooterLink text={"Guides"} />
                <FooterLink text={"About Us"} />
              </FooterList>

              <FooterList>
                <FooterColumnHead> MORE </FooterColumnHead>
                <FooterLink text={"Social"} />
                <FooterLink text={"Careers"} />
                <FooterLink text={"Legal Terms"} />
              </FooterList>
            </Flex>
          </div>
        ) : (
          <div style={{ padding: "0.5%" }}>
            <Flex justifyCenter>
              <div>
                <Brand
                  style={{
                    textAlign: "center",
                    marginTop: "1em",
                    color: "#fff",
                  }}
                >
                  Oasis
                </Brand>

                <Flex justifyAround>
                  <Hover padded>
                    <FiFacebook style={{ color: "black", fontSize: "1.8em" }} />
                  </Hover>
                  <Hover padded>
                    <FiTwitter style={{ color: "blue", fontSize: "1.8em" }} />
                  </Hover>
                  <Hover padded>
                    <FiGithub style={{ color: "black", fontSize: "1.8em" }} />
                  </Hover>
                </Flex>
              </div>
            </Flex>

            <br />
            <Flex justifyAround>
              <FooterList>
                <FooterColumnHead> PRODUCT </FooterColumnHead>
                <Hover marginRight>
                  <FooterLink text={" Create Team"} />
                </Hover>
                <FooterLink text={"Documentation"} />
                <FooterLink text={"Biling"} />
              </FooterList>
              <FooterList>
                <FooterColumnHead> HELP </FooterColumnHead>
                <FooterLink text={"Integrations"} />
                <FooterLink text={"Contact Support"} />
                <FooterLink text={"Guides"} />
                <FooterLink text={"About Us"} />
              </FooterList>

              <FooterList>
                <FooterColumnHead> MORE </FooterColumnHead>
                <FooterLink text={"Social"} />
                <FooterLink text={"Careers"} />
                <FooterLink text={"Legal Terms"} />
              </FooterList>
            </Flex>
          </div>
        )}
        <hr
          style={{ margin: "0rem 3rem", color: "#fff", background: "#fff" }}
        />
        <Testing
          style={{
            backgroundColor: "transparent",
            fontSize: "0.9rem",
            height: "6rem",
          }}
        >
          <p>
            Copyright © {new Date().getFullYear()} , a subsidiary of the
            <a href="https://www.fundry.netlify.com"> Fundry Program </a>.
            <br /> <a href="/"> Terms of Service </a> or
            <a href="/"> Privacy Policies </a>
          </p>
        </Testing>
      </FooterBody>
    </div>
  )
}

export default Footer
