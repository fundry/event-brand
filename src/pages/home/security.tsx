import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import Cloud from "../../assets/svg/ipad.svg"
import { Link } from "gatsby"

import { Text, Title, Contain, Body, HeadTitle } from "../../styles/style"
import { FiArrowRight } from "react-icons/fi"

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 50% 50%;
  p {
    margin: 0rem 0.5rem;
    text-indent: 30px;
    width: 40rem;
    text-align: center;
  }
  ${media.lessThan("medium")`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  `};
  ${media.lessThan("small")`
  text-align: center;
  align-items: center;
  flex-direction: column;
  display: flex; <div style={{display : 'flex' ,  justifyContent : 'space-between'}}; 
  `};
`

const OpaqueButton = styled.button`
  padding: 0.6rem 1rem;
  color: #401364;
  border: 0px;
  outline: 0px;
  font-size: 1.1rem;
  display: flex;
  border-radius: 10px;
  transition: all 500ms;
  &: hover {
    background: #401364;
    color: #fff;
    border-radius: 20px;
  }
`

const Security = () => {
  return (
    <Body>
      <br />

      <Contain>
        <HeadTitle style={{ textAlign: "center" }} center color="#401364">
          We value <span style={{ color: "#F84E06" }}> Your Data </span> On
          Oasis
        </HeadTitle>
        <Text small center>
          {" "}
          Every byte of data provided to Oasis belongs to you and secured, You
          can ;{" "}
        </Text>
        <br />

        <br />
        <Contain>
          <Grid>
            <img
              src={Cloud}
              alt="Cloud illustration"
              style={{ maxWidth: "70%" }}
            />

            <div>
              <Title colored center>
                <span style={{ color: "#F84E06" }}> Mutate </span> Your Data
              </Title>
              <Text center small>
                Events on Oasis are the most flexible. You can personalize and
                make changes to your data and your console. <br />
              </Text>
              <br />
              <Text center small>
                How data within eventful are secured How within eventful are
                secured How within eventful are secured How data within
              </Text>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                .
                <Link to="/docs/service" style={{ textDecoration: "none" }}>
                  <OpaqueButton>
                    {" "}
                    Tour Oasis Web Console
                    <div style={{ margin: "0rem 0.6rem" }}>
                      <FiArrowRight style={{ fontSize: "1.7rem" }} />
                    </div>
                  </OpaqueButton>
                </Link>
              </div>
            </div>
          </Grid>
        </Contain>

        <br />
        <br />
        <br />

        <br />
      </Contain>
      <Grid>
        <img src={Cloud} alt="Cloud illustration" style={{ maxWidth: "70%" }} />

        <div>
          <Title center colored>
            <span style={{ color: "#F84E06" }}> Consume </span> Your Data
          </Title>
          <Text center small>
            Consume your event data and statistics stored on Oasis into your
            event blogs and webpages. Our Graphql Api is customer centered and
            easy to interacte consume. <br />
          </Text>
          <br />
          <Text center small>
            How data within eventful are secured How within eventful are secured
            How within eventful are secured How data within
          </Text>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            .
            <Link to="/docs/service" style={{ textDecoration: "none" }}>
              <OpaqueButton>
                Try Oasis For Developers
                <div style={{ margin: "0rem 0.6rem" }}>
                  <FiArrowRight style={{ fontSize: "1.7rem" }} />
                </div>
              </OpaqueButton>
            </Link>
          </div>
        </div>
      </Grid>
      <br />
    </Body>
  )
}

export default Security
