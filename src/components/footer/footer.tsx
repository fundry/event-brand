import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import {
  FiGithub,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiSlack,
} from "react-icons/fi"
import { IoIosSend } from "react-icons/io"
import { Link } from "gatsby"
import media from "styled-media-query"

import {
  Text,
  Footer as FooterBody,
  FooterColumnHead,
  Hover,
  FooterList,
  Brand,
} from "../../styles/style"

const HoverCircle = styled(Hover)`
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0.5rem;
  align-items: center;
  border: 1px solid #f84e06;
  transition: all 300ms;
  box-shadow: 0px 3px 4px #000;
  a {
    color: #fff;
  }
  &: hover {
    border: 1px solid #fff;
  }
  ${media.lessThan("medium")`
  width: 50px;
  height: 50px;
  `};
  ${media.lessThan("medium")`
  width: 47px;
  height: 47px;
  `};
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
    background: #2153cc;
    padding: 1rem;
    color: #fff;
    div {
      text-align: center;
    }
  `

  const FooterText = styled(Text)`
    ${media.lessThan("large")`
        font-size : 0.9rem
    `};
    ${media.lessThan("medium")`
    font-size : 0.8rem
`};
    &: hover {
      color: #f84e06;
    }
  `

  const [Width, setWidth]: any = useState<any>(null)

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
        <FooterText white small>
          {props.text}
        </FooterText>
      </Link>
    )
  }

  return (
    <div>
      <FooterBody>
        <br />

        {Width >= 1000 ? (
          <div style={{ padding: "2rem 0.5rem" }}>
            <Flex justifyAround>
              <div>
                <h4 style={{ color: "#fff", textAlign: "center" }}>
                  Oasis For Events
                </h4>

                <Flex justifyAround>
                  <HoverCircle padded>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiFacebook style={{ fontSize: "1.7rem" }} />
                    </a>
                  </HoverCircle>

                  <HoverCircle padded>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiTwitter style={{ fontSize: "1.7rem" }} />
                    </a>
                  </HoverCircle>

                  <HoverCircle padded>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiInstagram style={{ fontSize: "1.7rem" }} />
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
                <h4 style={{ color: "#fff", textAlign: "center" }}>
                  Oasis For Events
                </h4>

                <Flex justifyAround>
                  <HoverCircle padded>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiFacebook style={{ fontSize: "1.6rem" }} />
                    </a>
                  </HoverCircle>

                  <HoverCircle padded>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiTwitter style={{ fontSize: "1.6rem" }} />
                    </a>
                  </HoverCircle>

                  <HoverCircle padded>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiInstagram style={{ fontSize: "1.6rem" }} />
                    </a>
                  </HoverCircle>

                  <HoverCircle padded>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopenerr"
                      style={{ textDecoration: "none" }}
                    >
                      <FiSlack style={{ fontSize: "1.6rem" }} />
                    </a>
                  </HoverCircle>
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
            fontSize: "0.8rem",
            height: "4rem",
          }}
        >
          <p>
            Copyright © {new Date().getFullYear()} , a subsidiary of the
            <a href="https://www.github.com/fundry"> Fundry Program </a>.
            <br /> <a href="/"> Terms of Service </a> or
            <a href="/"> Privacy Policies </a>
          </p>
        </Testing>
      </FooterBody>
    </div>
  )
}

export default Footer
