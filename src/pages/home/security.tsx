import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"

import { Text, Title, Contain, Body, HeadTitle } from "../../styles/style"
import { FiArrowRight } from "react-icons/fi"

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem 1rem;
  grid-template-columns: 50% 50%;
  p {
    margin: 0rem 0.5rem;
    text-indent: 30px;
    width: 45rem;
    text-align: center;
  }
  img {
    max-width: 70%;
  }
  ${media.lessThan("large")`
  display: flex;
  flex-direction: column;
  align-items  : center;
  img {
    margin : 2rem;
    max-width : 70%;
  }
  `};

  ${media.lessThan("medium")`
  display: flex;
  flex-direction: column;
  align-items  : center;
  img {
    margin : 2rem;
    max-width : 70%;
  }
  p {
    margin: 0rem 1rem;
    text-indent: 30px;
    width: auto;
    text-align: center;
  }
  `};
  ${media.lessThan("small")`
  display: flex;
  flex-direction: column;
  align-items  : center;
  img {
    margin : 0.1rem;
    max-width : 80%;
  };
  p {
    margin: 0rem 1rem;
    text-indent: 30px;
    width: auto;
    text-align: center;
  }
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
  ${media.lessThan("small")`
  border-radius: 5px;
  font-size: 1rem;
  margin-right  : 5rem; 
  padding: 0.4rem 0.8rem;
  &: hover {
    border-radius: 7px;
  }
`};
`

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 0 5rem;
  padding: 0 2rem;
  img {
    height: 150px;
    width: 150px;
    margin: 0.5rem 0;
  }
`

const Data = [
  {
    id: 1,
    name: "Data Exports",
    text:
      "  Events on Oasis are the most flexible. You can personalize and make changes to your data and your console.",
    // img: "../../assets/svg/ipad.svg",
  },
  {
    id: 1,
    name: "Data Exports",
    text:
      "  Events on Oasis are the most flexible. You can personalize and make changes to your data and your console.",
    // img: "../../assets/svg/ipad.svg",
  },
  {
    id: 1,
    name: "Data Exports",
    text:
      "  Events on Oasis are the most flexible. You can personalize and make changes to your data and your console.",
    // img: "../../assets/svg/ipad.svg",
  },
]

const Circle = styled.div`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  background: violet;
  border: 1px solid violet;
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
        <Contain>
          <Items>
            {Data.map(({ img, id, text, name }) => {
              return (
                <div key={id}>
                  <div
                    style={{
                      padding: "1rem 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={require(`../../assets/images/security/1.png`)} />
                  </div>
                  <Title center small>
                    {name}
                  </Title>

                  <Text center> {text} </Text>
                </div>
              )
            })}
          </Items>
        </Contain>

        <br />
      </Contain>

      <br />
    </Body>
  )
}

export default Security
