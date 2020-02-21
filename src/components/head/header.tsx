import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { FiMenu } from "react-icons/fi"
import { HeaderBody, HBtn as Button, Brand } from "../../styles/style"

interface Props {
  style: Boolean
}

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

  // const hooks = useWindowWidth()
  return (
    <HeaderBody>
      {Width >= 800 ? (
        <div>
          {style == false ? (
            <Flex justifyBetween>
              <Flex>
                <img
                  alt="logo"
                  src={
                    "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                  }
                />
                <Link to="/">
                  <h3>Eventure</h3>
                </Link>
              </Flex>
              <Flex>
                <div style={{ paddingRight: "20px" }}>
                  <Link to="/">
                    <a> Resources </a>
                  </Link>
                </div>
              </Flex>
            </Flex>
          ) : (
            <Flex justifyBetween>
              <Flex>
                <img
                  alt="logo"
                  src={
                    "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                  }
                />
                <Link to="/">
                  <h3>Eventure</h3>
                </Link>
              </Flex>
              <Flex>
                <div style={{ paddingRight: "30px" }}>
                  <Link to="/">
                    <a> Resources </a>
                  </Link>
                </div>
                <Flex>
                  <div style={{ paddingRight: "20px" }}>
                    <Link to="user/login">
                      <a> Login </a>
                    </Link>
                  </div>

                  <Link to="/download/download">
                    <Button small login>
                      Login
                    </Button>
                  </Link>

                  <Link to="/download/download">
                    <Button small> Create Account </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          )}{" "}
        </div>
      ) : (
        // {/* MOBILE RESPONSIVENESS   */}
        <div>
          {style == false ? (
            <Flex justifyBetween>
              <Flex>
                <img
                  alt="logo"
                  src={
                    "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                  }
                />
                <Link to="/">
                  <Brand>Remotify</Brand>
                </Link>
              </Flex>

              <Link to="/download/download">
                <Button> Downloada </Button>
              </Link>
            </Flex>
          ) : (
            <Flex justifyBetween>
              <Flex>
                <img
                  alt="logo"
                  src={
                    "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                  }
                />
                <Link to="/">
                  <Brand>Eventure</Brand>
                </Link>
              </Flex>

              <FiMenu style={{ fontSize: "2em" }} />
            </Flex>
          )}
        </div>
      )}
    </HeaderBody>
  )
}

export default Header
