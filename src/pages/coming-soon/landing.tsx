import * as React from "react"
import { Body, Title, BgTitle, Text, CustomButton } from "../../styles/style"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import media from "styled-media-query"
import { IoMdMegaphone, IoLogoMarkdown } from "react-icons/io"

import useWindowWidth from "../../styles/resize"
import { BetaRelease } from "../../data"
import Ipad from "../../assets/svg/ipad.svg"
import Iphone from "../../assets/svg/iphone.svg"
import Features from "../../assets/svg/features.svg"
import { FiEye } from "react-icons/fi"

const Grid = styled.div`
  display: grid;
  grid-gap: 3rem 0rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  ${media.lessThan("large")`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  `};
`

const Input = styled.input`
  width: 35rem;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  outline: 0px;
  border-style: dashed;
  font-size: 1.1rem;
  transition: all 450ms;
  font-weight: 600;
  color: #401364;
  &: hover {
    border: 5px solid #0b33a2;
  }
  ${media.lessThan("medium")`
  width: 30rem;
  `}
  ${media.lessThan("small")`
  width: 25rem;
  `}
}
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
        <br />
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

      <Body style={{ padding: "5rem 1rem" }}>
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
          Powering Modern Events For a Redefined Experience!
        </Text>
        {!Submit ? (
          <Flex justifyCenter>
            <Flex column>
              <Input
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
              <br />
              <Flex justifyCenter>
                <CustomButton
                  disabled={Email.length < 8}
                  onClick={() => {
                    SubmitData()
                  }}
                  style={{
                    background: Email.length < 8 && "transparent",
                    display: "flex",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <div style={{ margin: "0rem 0.5rem" }}>
                    <IoMdMegaphone style={{ fontSize: "2.1rem" }} />{" "}
                  </div>
                  Stay Notified{" "}
                </CustomButton>
              </Flex>
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
              <FiEye style={{ fontSize: "1.8rem" }} />
            </div>
            <Text small white>
              Peep on what Oasis really is.
            </Text>
          </div>
        </Link>
        <Flex justifyCenter>
          {Width >= 800 ? (
            <img
              alt="Visual Explanation"
              src={Ipad}
              style={{ height: "auto", maxWidth: "90%" }}
            />
          ) : (
            <img
              alt="Visual Explanation"
              src={Iphone}
              style={{ height: "auto", maxWidth: "70%" }}
            />
          )}
        </Flex>
        <br />
        <br />{" "}
        <Grid>
          {BetaRelease.map(({ id, title }) => {
            return (
              <ItemsWrapper>
                <Flex justifyCenter>
                  <div key={id} style={{ width: "20rem" }}>
                    <Flex justifyCenter>
                      <img
                        alt={"Feature Illustration"}
                        src={Features}
                        style={{
                          alignItems: "center",
                          height: "auto",
                          width: "10rem",
                        }}
                      />
                    </Flex>
                    <br />
                    <br />
                    <Title bold style={{ color: "white" }} center>
                      {" "}
                      {title}{" "}
                    </Title>{" "}
                  </div>
                </Flex>{" "}
              </ItemsWrapper>
            )
          })}
        </Grid>
      </Body>
    </div>
  )
}

export default Landing
