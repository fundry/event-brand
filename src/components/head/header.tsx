import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { FiChevronRight, FiMenu, FiArrowRight, FiLogIn } from "react-icons/fi"
import styled from "styled-components"
import media from "styled-media-query"

import {
  HeaderBody,
  HBtn as Button,
  Brand,
  Text,
  Hover,
} from "../../styles/style"

interface Props {
  style: Boolean
}

// TODO Rewrite this component to use correct UL && LI tags

const Question = styled.div`
  background: #401364;
  padding: 0.5rem 1rem;
  width: 100%;
  ${media.lessThan("large")`
display : none;
    padding: 0.5rem 0.5rem; 
`};
  ${media.lessThan("small")`
  display : none;
`}
`

const Header = ({ style }: Props) => {
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

  const Icons = (props: any) => {
    return (
      <div style={{ paddingRight: "60px" }}>
        <Link to={props.to} style={{ textDecoration: "none" }}>
          <Text white small>
            {props.text}
          </Text>
        </Link>
      </div>
    )
  }

  // const hooks = useWindowWidth()
  return (
    <div>
      <HeaderBody>
        {Width >= 1000 ? (
          <div>
            <Flex justifyBetween>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Brand>Oasis</Brand>
              </Link>

              <Flex>
                <Icons text={"Events"} to="/events/event" />
                <Icons text={"Resources"} to="/docs/service" />
                <Icons text={"Road Map"} to="docs/proposal" />
              </Flex>

              <Flex>
                <Hover style={{ display: "flex" }}>
                  <Text small white>
                    {" "}
                    Login{" "}
                  </Text>
                  <div style={{ margin: "0.1rem 0.5rem" }}>
                    <FiLogIn style={{ fontSize: "1.6rem" }} />
                  </div>
                </Hover>

                <a href={"https://event-console.netlify.com"} target={"_blank"}>
                  <Button small> Create Account </Button>
                </a>
              </Flex>
            </Flex>
          </div>
        ) : (
          // {/* MOBILE RESPONSIVENESS   */}
          <Flex justifyBetween>
            <Link
              to="/"
              style={{ textDecoration: "none", margin: "0rem 1rem" }}
            >
              <Brand>Oasis</Brand>
            </Link>

            <Flex>
              <div
                style={{ borderRight: "2px solid #fff", marginRight: "1rem" }}
              />
              <Hover style={{ paddingTop: "5px" }}>
                <FiMenu style={{ color: "#fff", fontSize: "2em" }} />
              </Hover>
            </Flex>
          </Flex>
        )}
      </HeaderBody>
      <Question>
        <br />
        <br />
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Text small white center>
            What do you think the Future of Events after the Pandemic would be?{" "}
            <a
              target="_blank"
              rel={"noopener"}
              href="https://google-forms.com"
              style={{
                textDecoration: "none",
                color: "#f84e06",
                marginLeft: "1rem",
              }}
            >
              {" "}
              Fill a short survey{" "}
            </a>
          </Text>

          <Hover style={{ margin: "0.2rem 0.3rem" }}>
            <FiArrowRight style={{ fontSize: "1.7rem", color: "#f84e06" }} />
          </Hover>
        </div>
      </Question>
    </div>
  )
}

export default Header
