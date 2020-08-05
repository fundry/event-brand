import * as React from "react"
import { Body, Title, BgTitle, Text, CustomButton } from "../../styles/style"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import media from "styled-media-query"
import { IoMdMegaphone } from "react-icons/io"

import useWindowWidth from "../../styles/resize"
import { BetaRelease } from "../../data"
import Ipad from "../../assets/svg/ipad.svg"
import Iphone from "../../assets/svg/iphone.svg"
import Features from "../../assets/svg/features.svg"
import { FiEye, FiDatabase } from "react-icons/fi"
import { IoIosChatboxes, IoIosColorPalette, IoIosPaper } from "react-icons/io"

const Grid = styled.div`
  display: grid;
  grid-gap: 3rem 0rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  ${media.lessThan("large")`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  `};
`

const InputBox = styled.div`
  width: auto;
  height: auto;
  border-radius: 7px;
  border: 0;
  display: flex;
  padding: 0;
  input {
    width: 27rem;
    padding: 0.7rem 1rem;
    border-radius: 0px;
    border: 0px;
    outline: 0px;
    font-size: 1.1rem;
    transition: all 450ms;
    font-weight: 600;
    color: #401364;
  }
  button {
    text-align: center;
    padding: 0.7rem 1.5rem;
    display: flex;
    background: #22263d;
    border: 0px;
    border-radius: 0 10px 10px 0;
  }
  ${media.lessThan("medium")`
  flex-direction : column;  
    input {
      width: 27rem;
      font-size : 0.9rem;
    }
    div {
      display : flex;
      justify-content : center;
    }
    button {
      text-align : center;
      margin : 1rem;
      width : 13rem;
      padding: 0.7rem 1.5rem;
      display: flex;
      background: #22263d;
      border: 0px;
      border-radius: 0 10px 10px 0;
    }
    `}
  ${media.lessThan("small")`
input {
  width: 23rem;
}
    `}
    &: hover {
    button {
      cursor: pointer;
    }
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 1.5rem 1rem;
  }
`

const Box = styled.div`
  background: ${props => props.background};
  border: 1px solid ${props => props.background};
  height: 55px;
  box-shadow: 0 2px 3px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  border-radius: 50%;
  color: ${props => props.color};
`

const Landing = (): JSX.Element => {
  const [Submit, setSubmit] = React.useState<boolean>(false)

  const [Email, setEmail] = React.useState<string>("")
  const [Error, setError] = React.useState<string>("")
  const [hasError, setEError] = React.useState<boolean>(false)

  const [Loading, setLoading] = React.useState<boolean>(true)
  const Width = useWindowWidth()

  //@ts-ignore
  const ENDPOINT: string = process.env.GATSBY_BETA_ENDPOINT

  const ItemsWrapper = styled.div`
    opacity: 1;
    transition: opacity 450ms;
  `

  const handleErr = (e: { statusText: React.SetStateAction<string> }) => {
    setLoading(false)
    setSubmit(true)
    setEError(true)
    setError(e.statusText)
  }

  const SubmitData = () => {
    // setTimeout(() => {
    // }, 1500)

    //@ts-ignore
    const body = {
      email: Email,
    }

    fetch(`${ENDPOINT}?email=${Email}`, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
    })
      // fetch always returns 200||ok. Have to replicate errs in 2 blcks
      .then(res => {
        if (res.ok) {
          setLoading(false)
          setSubmit(true)
        } else {
          handleErr(res) // throw into app logger
        }
      })
      .catch(e => {
        handleErr(e)
      })
  }

  const debouncer = (func: any, timer: number) => {
    let timeId: any = null

    return (...args: any) => {
      if (timeId) {
        clearTimeout(timeId)
      }
      timeId = setTimeout(() => {
        func(...args)
      }, timer)
    }
  }

  const Features = [
    {
      id: 1,
      title: "Centralized Cloud Storage",
      color: "#22263d",
      icon: <FiDatabase style={{ fontSize: "1.4rem" }} />,
    },
    {
      id: 2,
      title: "Centralized Cloud Storage",
      color: "#22263d",
      icon: <FiDatabase style={{ fontSize: "1.4rem" }} />,
    },
    {
      id: 3,
      title: "Centralized Cloud Storage",
      color: "#22263d",
      icon: <FiDatabase style={{ fontSize: "1.4rem" }} />,
    },
    {
      id: 4,
      title: "Centralized Cloud Storage",
      color: "#22263d",
      icon: <FiDatabase style={{ fontSize: "1.4rem" }} />,
    },
    {
      id: 5,
      title: "Centralized Cloud Storage",
      color: "#22263d",
      icon: <FiDatabase style={{ fontSize: "1.4rem" }} />,
    },
  ]

  return (
    <div style={{ background: "#401364" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Helmet>
      <div
        style={{
          padding: "0.5rem 1rem",
          borderBottom: "1px solid #fff",
          borderBottomStyle: "dashed",
        }}
      >
        <Text white small center>
          What do you think would be the future of events? <br />
          <a
            href="/"
            target="_blank"
            style={{ textDecoration: "none", color: "#f84e06" }}
          >
            Take a short survey.
          </a>
        </Text>
      </div>

      <Body style={{ padding: "3rem 1rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BgTitle white center>
            Oasis For Events
          </BgTitle>
          <div>
            <span
              style={{
                margin: "0.6rem 0.5rem",
                color: "#fff",
                background: "#f84e06",
                borderRadius: "15px",
                padding: "0.2rem 0.5rem",
                fontSize: "1rem",
                boxShadow: "0px 2px 4px solid #f84e06",
              }}
            >
              Coming Soon{" "}
            </span>
          </div>
        </div>
        <Text white center>
          Providing a Sustainable launchpad for Events
        </Text>
        {!Submit ? (
          <Flex justifyCenter>
            <Flex column>
              <InputBox>
                <input
                  type="email"
                  required
                  style={{ fontWeight: "normal", textAlign: "center" }}
                  value={Email}
                  onChange={(e: any) => {
                    e.preventDefault()
                    setEmail(e.target.value)
                  }}
                  placeholder="Your Email Address"
                />

                <div>
                  <button
                    disabled={Email.length < 8}
                    onClick={() => {
                      SubmitData()
                    }}
                    style={{
                      display: "flex",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ margin: "0rem 0.7rem" }}>
                      <IoMdMegaphone style={{ fontSize: "1.7rem" }} />{" "}
                    </span>
                    Stay Notified{" "}
                  </button>
                </div>
              </InputBox>
            </Flex>
          </Flex>
        ) : (
          <Flex justifyCenter>
            {Loading ? (
              <div>
                <br />
                <Text white> Loading ... </Text>
                <br />
              </div>
            ) : (
              <div>
                {!hasError ? (
                  <div>
                    <Text white small center>
                      Inorder to make Oasis more User Centered, we would like to
                      know your thoughts on past events attended. <br /> <br />
                      Please
                      <a
                        href="/"
                        target="_blank"
                        style={{
                          margin: "0rem 0.5rem",
                          textDecoration: "none",
                          color: "#f84e06",
                        }}
                      >
                        take{" "}
                      </a>
                      this short survey
                    </Text>
                  </div>
                ) : (
                  <div>
                    <Text center white>
                      {" "}
                      Ooops! An Error Occurred.{" "}
                      <span
                        onClick={() => {
                          setSubmit(false)
                        }}
                        style={{ color: "#f84e06", cursor: "pointer" }}
                      >
                        {" "}
                        Try Again{" "}
                      </span>{" "}
                    </Text>
                  </div>
                )}
              </div>
            )}
          </Flex>
        )}
        <br />
        <br />
        <br />
        <Link to="/home/home" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ margin: "0rem 1rem" }}>
              <FiEye style={{ fontSize: "1.7rem" }} />
            </div>
            <Text small white>
              See what Oasis really is.
            </Text>
          </div>
        </Link>
        <Flex justifyCenter>
          {Width >= 800 ? (
            <div style={{ display: "grid", gridTemplateColumns: "auto 30rem" }}>
              <img
                alt="Visual Explanation"
                src={Ipad}
                style={{ height: "auto", maxWidth: "100%" }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <List>
                  {Features.map(({ id, title, icon }) => {
                    return (
                      <li key={id}>
                        <div style={{ display: "flex" }}>
                          <Box color="#fff" background="#22263d">
                            {icon}
                          </Box>

                          <div
                            style={{
                              paddingTop: "0.5rem",
                              margin: "0.4rem 1rem",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Text white>{title}</Text>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </List>
              </div>
            </div>
          ) : (
            <img
              alt="Visual Explanation"
              src={Iphone}
              style={{ height: "auto", maxWidth: "70%" }}
            />
          )}
        </Flex>
        <br />
      </Body>
    </div>
  )
}

export default Landing
