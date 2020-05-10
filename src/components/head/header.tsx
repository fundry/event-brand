import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { FiChevronRight, FiMenu } from "react-icons/fi"

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
        {Width >= 1200 ? (
          <div>
            <Flex justifyBetween>
              <Flex>
                <img
                  alt="logo"
                  src={
                    "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                  }
                />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Brand>Oasis</Brand>
                </Link>
              </Flex>

              <Flex>
                <Icons text={"Events"} to="/events/event" />
                <Icons text={"Resources"} to="/docs/service" />
                <Icons text={"Road Map"} to="docs/proposal" />
              </Flex>

              <Flex>
                <a href={"https://event-console.netlify.com"} target={"_blank"}>
                  <Button small login>
                    Login
                  </Button>
                </a>

                <a href={"https://event-console.netlify.com"} target={"_blank"}>
                  <Button small> Create Account </Button>
                </a>
              </Flex>
            </Flex>
          </div>
        ) : (
          // {/* MOBILE RESPONSIVENESS   */}
          <Flex justifyBetween>
            <Flex>
              <img
                alt="logo"
                src={
                  "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                }
              />
              <Link to="/">
                <Brand>Oasis</Brand>
              </Link>
            </Flex>

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
      </HeaderBody>{" "}
      <div style={{ background: "#401364", padding: "0.5rem 1rem" }}>
        <br />
        <br />
        <br />
        <Text small white center>
          What do you think the Future of Events after the Pandemic would be?{" "}
          <a href="/"> Fill a short survey </a>
        </Text>{" "}
      </div>{" "}
    </div>
  )
}

export default Header
