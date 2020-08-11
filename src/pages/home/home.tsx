import React, { useState, useEffect } from "react"
import { IoMdRocket, IoIosContact } from "react-icons/io"
import { FiArrowRight, FiX } from "react-icons/fi"
import styled, { keyframes } from "styled-components"
import media from "styled-media-query"

import { HeadTitle, Body, Text, Hover } from "../../styles/style"
import Splash from "../../assets/svg/illustration.svg"

import Banner from "../../components/head/banner"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Security from "./security"

import Integration from "./features/integrations"
import DistributedMeetups from "./features/distributedMeetups"
import App from "./features/app"
import Media from "./features/media"
import Experience from "./features/experience"
import Community from "./features/community"

const SmallBouncer = keyframes`
  from {
    transform:  translateY(0%)
  }
  to {
    transform:  translateY(-20%)
  }
`

const Rocket = styled.div`
  background-image : url(${(props: { url: any }) => props.url});
  width : 120px;
  height : 120px;
  background : violet;
  border-radius : 50%;
  display : flex;
  justify-content : center;
  margin : 1rem 0rem;
  align-items : center;
  &: hover {
    cursor : pointer;
  }
  ${media.lessThan("huge")`
  width : 100px;
  height : 100px;
  `}
  ${media.lessThan("large")`
  width : 95px;
  height : 95px;
  `}
  ${media.lessThan("medium")`
  width : 85px;
  height : 85px;
  `}
  `

const RIcon = styled(IoMdRocket)`
  animation: ${SmallBouncer} 2500ms ease-in-out 0s infinite;
`

const FitHover = styled(Hover)`
  ${media.lessThan("medium")`
      display : none;
  `};
`

const SupportBox = styled.div`
  width: 22rem;
  color: #fff;
  height: 60px;
  display: flex;
  padding-top: 20px;
  align-items: center;
  background: #22263d;
  color: white;
  position: absolute;
  position: -webkit-sticky;
  bottom: 0rem;
  float: right;
  transition: all 800ms;
  text-align: center;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 3px 1px 3px 0px grey;
`

const FAB = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  color: white;
  position: absolute;
  position: -webkit-sticky;
  bottom: 1rem;
  float: right;
  transition: all 800ms;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 3px 1px 3px 0px grey;
`

const Home = (): JSX.Element => {
  const [Width, setWidth] = useState(null)
  const [Support, showSupport] = useState<Boolean>(false)

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

  return (
    <Layout>
      <Seo title="Home" />
      <Banner />

      <Body
        style={{ color: "#401364", background: "#f2f5ff", overflow: "hidden" }}
      >
        <br />
        <br />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Rocket img={Splash}>
            <RIcon style={{ fontSize: "3rem" }} />
          </Rocket>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
        <HeadTitle align="center" color="#F84E06">
          Leverage Oasis{" "}
          <span style={{ color: "#401364" }}> As A LaunchPad. </span>
        </HeadTitle>

        <br />
        <br />

        <Media />
        <br />
        <br />

        <Integration />
      </Body>

      <br />

      <br />
      <Experience />

      <div
        style={{
          background: "#22263d",
          padding: "1rem",
          color: "#fff",
        }}
      >
        <DistributedMeetups />
        <br />
        <br />
        <br />
        <br />
      </div>

      <Community />

      <div style={{ color: "#401364", background: "#f2f5ff" }}>
        <br />
        <br />
        <App />
      </div>
      <img alt="wave" src={require("../../assets/svg/bottomWave.svg")} />

      <Security />
      <br />

      {/* {Support && (
        <SupportBox>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <Hover style={{ margin: "0rem 0.2rem" }}>
                <IoIosContact style={{ fontSize: "1.7rem" }} />
              </Hover>

              <Text style={{ fontSize: "0.9rem", color: "#fff" }} small>
                Thinking of organizing an event?
              </Text>
            </div>

            <Hover
              onClick={() => showSupport(!Support)}
              style={{ margin: "0rem 0.2rem" }}
            >
              <FiX style={{ fontSize: "1.3rem" }} />
            </Hover>
          </div>
        </SupportBox>
      )}

      {!Support && (
        <FAB>
          <Hover onClick={() => {}}>
            <IoIosContact style={{ fontSize: "1.8rem" }} />
          </Hover>
        </FAB>
      )} */}

      <br />
    </Layout>
  )
}

export default Home
