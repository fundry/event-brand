import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Modal } from "react-bootstrap"
import { FiGithub, FiTwitter, FiFacebook } from "react-icons/fi"
import media from "styled-media-query"
import { Link } from "gatsby"

import { Text, Footer as FooterBody } from "../../styles/style"

const Footer = () => {
  const Head = {
    fontSize: "0.9em ",
    fontWeight: "bold",
    color: "#fff",
  }

  const Title = {
    fontSize: "0.8em",
    color: "#fff",
  }

  const Testing = styled.div({
    textAlign: "center",
    background: "#0e2f5a",
    padding: "1em",
    color: "#fff",
  })

  const Button = styled.button`
    background: #5919ab;
    border: 1px solid #0e2f5a;
    border-radius: 0px 15px 15px 0px  ;
    color: #fff;
    height: 7.1vh,
    margin: 0 1em;
    padding: 0.50em 1.5em;
    :hover {
      border: 2px solid #0e2f5a;
      font-size: 1em;
    }
  `

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

  return (
    <div>
      <Testing>
        <Flex justifyBetween>
          <Text
            small
            white
            style={{ paddingLeft: Width >= 500 ? "50px" : "2px" }}
          >
            Oasis is launching very soon!
          </Text>

          {Width >= 470 ? (
            <Link to="/testing/testers">
              <Button
                onClick={() => {
                  setTestModal(true)
                }}
                style={{
                  paddingRight: "15px",
                  marginRight: "25px",
                  fontSize: "1.1em",
                }}
              >
                Get Early Acess
              </Button>
            </Link>
          ) : (
            <Link to="/testing/testers">
              <Button
                onClick={() => {
                  setTestModal(true)
                }}
                style={{
                  paddingRight: "15px",
                  fontSize: "1.1em",
                }}
              >
                Join
              </Button>
            </Link>
          )}
        </Flex>
      </Testing>

      <FooterBody>
        {Width >= 500 ? (
          <div style={{ padding: "2%" }}>
            <Flex justifyAround>
              <div>
                <h5 style={{ marginTop: "1em", color: "#fff" }}>Event.Inc</h5>

                <Flex justifyAround>
                  <FiFacebook style={{ color: "black", fontSize: "1.5em" }} />
                  <FiTwitter style={{ color: "blue", fontSize: "1.5em" }} />
                  <FiGithub style={{ color: "black", fontSize: "1.5em" }} />
                </Flex>
              </div>
              <Flex column>
                <p style={Head}> PRODUCT </p>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text white small>
                    Create Team
                  </Text>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text white small>
                    Documentation
                  </Text>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text white small>
                    Billing
                  </Text>
                </Link>{" "}
              </Flex>
              <Flex column>
                <p style={Head}> HELP </p>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text white small>
                    Integrations
                  </Text>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text white small>
                    Guides
                  </Text>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Text white small>
                    About Us
                  </Text>
                </Link>{" "}
              </Flex>

              <Flex column>
                <p style={Head}> MORE </p>
                <Text white small>
                  Social
                </Text>
                <Text white small>
                  Careers
                </Text>
                <Text white small>
                  Legal terms
                </Text>
              </Flex>
            </Flex>
          </div>
        ) : (
          <div style={{ padding: "0.5%" }}>
            <Flex justifyCenter>
              <div>
                <h5 style={{ marginTop: "1em", color: "#fff" }}>Event.Inc</h5>

                <Flex justifyAround>
                  <FiFacebook style={{ color: "black", fontSize: "1.5em" }} />
                  <FiTwitter style={{ color: "blue", fontSize: "1.5em" }} />
                  <FiGithub style={{ color: "black", fontSize: "1.5em" }} />
                </Flex>
              </div>
            </Flex>

            <br />
            <Flex justifyAround>
              <Flex column>
                <p style={Head}> PRODUCT </p>
                <Text white small>
                  Create Team
                </Text>
                <Text white small>
                  Documentation
                </Text>
                <Text white small>
                  Billing
                </Text>
              </Flex>
              <Flex column>
                <p style={Head}> HELP </p>
                <Text white small>
                  Integrations
                </Text>
                <Text white small>
                  Guides
                </Text>
                <Text white small>
                  About Us
                </Text>
              </Flex>

              <Flex column>
                <p style={Head}> MORE </p>
                <Text white small>
                  Social
                </Text>
                <Text white small>
                  Careers
                </Text>
                <Text white small>
                  Legal terms
                </Text>
              </Flex>
            </Flex>
          </div>
        )}

        <div
          style={{
            marginTop: "1em",
            paddingTop: "0.5em",
            textAlign: "center",
            padding: "0.7%",
            backgroundColor: " #361f94",
            fontSize: "0.8em",
            color: "#fff",
          }}
        >
          <p>
            Copyright © {new Date().getFullYear()} , a subsidiary of the
            <a href="https://www.fundry.netlify.com"> Fundry Program </a>.
            <br /> <a href="/"> Terms of Service </a> or
            <a href="/"> Privacy Policies </a>
          </p>
        </div>
      </FooterBody>
    </div>
  )
}

export default Footer
