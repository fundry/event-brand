import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiGithub, FiTwitter, FiFacebook } from "react-icons/fi"
import { Link } from "gatsby"

import {
  Text,
  Footer as FooterBody,
  FooterColumnHead,
  Hover,
  FooterList,
  Brand,
} from "../../styles/style"

const Footer = () => {
  const Testing = styled.div({
    textAlign: "center",
    background: "#0e2f5a",
    padding: "1em",
    color: "#fff",
  })

  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const handleResize = value => {
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
      <Testing>
        <Flex justifyCenter>
          <Text small white>
            Thinking of Organizing an event? Create One on Oasis and plan it out
            gradually.
          </Text>
        </Flex>
      </Testing>

      <FooterBody>
        {Width >= 800 ? (
          <div style={{ padding: "2%" }}>
            <Flex justifyAround>
              <div>
                <br />
                <Brand style={{ color: "#fff", textAlign: "center" }}>
                  Oasis{" "}
                </Brand>

                <Flex justifyAround>
                  <Hover padded>
                    <FiFacebook style={{ color: "black", fontSize: "2rem" }} />
                  </Hover>

                  <Hover padded>
                    <FiTwitter style={{ color: "blue", fontSize: "2rem" }} />
                  </Hover>

                  <Hover padded>
                    <FiGithub style={{ color: "black", fontSize: "2rem" }} />
                  </Hover>
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
