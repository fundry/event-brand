// @ts-ignore
import styled, { keyframes } from "styled-components"
import media from "styled-media-query"

export const CustomButton = styled.button`
  padding: 0.5rem 0.6rem;
  transition: all 450ms;
  border: 1px solid #f84e06;
  border-radius: 6px;
  font-size: 1.2rem;
  background: #f84e06;
  display: flex;
  justify-content: center;
  width: ${props => (props.wide ? "18rem" : "17rem")};
  color: #fff;
  box-shadow: 0px 2px 5px #401364;
  &: hover {
    width: 19rem;
  }
`

export const HeadTitle = styled.h1`
  color: ${(props: { color: any }) => props.color};
  font-size: ${(props: { app: any }) => (props.app ? null : "2em")};
  text-align: ${(props: { align: any }) => props.align};
  ${media.lessThan("huge")`
  font-size: ${(props: { app: any }) => (props.app ? null : "2em")};
  `};
  ${media.lessThan("large")`
  font-size: ${(props: { app: any }) => (props.app ? null : "1.9em")};
  `};
  ${media.lessThan("medium")`
  font-size: ${(props: { app: any }) => (props.app ? null : "1.8em")};
  `};
  ${media.lessThan("small")`
  font-size: ${(props: { app: any }) => (props.app ? null : "1.6em")};
  font-weight : lighter;
  `};
`

const Contain = styled.div`
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  max-width: ${(props: { width: any }) => (props.width ? "900px" : null)};
  width: ${(props: { widthed: any }) => (props.widthed ? "45rem" : null)};
  padding: ${(props: { padded: any }) => (props.padded ? "1rem" : null)}
    ${media.lessThan("medium")`
width: ${(props: { widthed: any }) => (props.widthed ? "30rem" : null)};
   `};
  ${media.lessThan("large")`
width: ${(props: { widthed: any }) => (props.widthed ? "35rem" : null)};
  `};
  ${media.lessThan("small")`
width: ${(props: { widthed: any }) => (props.widthed ? "20rem" : null)};
  `};
`

const Text = styled.p`
  letter-spacing: 0.05rem;
  color: ${props => (props.white ? "#fff" : "#22263d")};
  font-weight: lighter;
  font-size: ${(props: { small: any }) =>
    props.small ? "1.10rem " : "1.2rem"};
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  line-height: ${props => (props.heightened ? "2.2rem" : "1.8rem")};
  padding: ${props => (props.padded ? "0rem 3rem" : "0rem")};
  @media (max-width: 1700px) {
    font-size: ${(props: { small: any }) =>
      props.small ? "1.1rem " : "1.1rem"};
  }
  ${media.lessThan("large")`
  letter-spacing: 0.04rem;
  font-size: ${(props: { small: any }) =>
    props.small ? "1.1rem " : "1.15rem"};
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  padding: ${props => (props.padded ? "0rem 2rem" : "0rem")}
`};
  ${media.lessThan("medium")`
letter-spacing: 0.03rem;
font-size: ${(props: { small: any }) => (props.small ? "0.95rem " : "1rem")};
text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
padding: ${props => (props.padded ? "0rem 1rem" : "0rem")}
`};
  ${media.lessThan("small")`
  letter-spacing: 0.01rem;
font-size: ${(props: { small: any }) => (props.small ? "0.90rem " : "1rem")};
text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  padding: ${props => (props.padded ? "0rem 0.5rem" : "0rem")}
  `};
`

const Title = styled.h4`
  color: ${(props: { colored: any }) => (props.colored ? "#401364" : "#000")}
  font-weight: ${(props: { bold: any }) => (props.bold ? "400" : "normal")};
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  font-size :  1.4rem;
  ${media.lessThan("medium")`
    font-size :  1.4rem;
  `};
  ${media.lessThan("large")`
      font-size :  1.4rem;
  `};
  ${media.lessThan("medium")`
       font-size :  1.35rem;
    `};
`

const autoGrid = (minColumnWidth = 200, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
})

const Items = styled.div({
  ...autoGrid(220, 20),
  padding: "1rem",
  marginLeft: "1.5rem",
})

const CustomCard = styled.div`
  border: 1px solid grey;
  box-shadow: 1px 7px 5px grey;
  transition: transform 1s;
  background: #fff;
  margin: 1rem;
  padding: 0.5rem 1rem;
  width: 24rem;
  height: auto;
  textalign: center;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`

const Cards = styled.div`
  display: flex;
  justify-content: space-around;

  ${media.lessThan("medium")`
display: grid;
justify-content: center;
  `};
`

const BgTitle = styled.h1`
  font-weight: normal;
  color: ${props => (props.white ? "#fff" : null)};
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  font-size: ${(props: { support: any }) =>
    props.support ? "1.75rem" : "2rem"};
  ${media.lessThan("large")`
  font-size : ${(props: { support: any }) =>
    props.support ? "1.77rem" : "2rem"}
  `};
  ${media.lessThan("medium")`
  font-size : ${(props: { support: any }) =>
    props.support ? "1.5rem" : "1.6rem"}
`};
  ${media.lessThan("small")`
    font-weight: 550;
      font-size : ${(props: { support: any }) =>
        props.support ? "1.4rem" : "1.45rem"}
    `};
`

const Body = styled.div`
  padding: ${(props: { banner: any }) =>
    props.banner ? "0rem 10em" : "0rem 2em"};
  background: ${(props: { banner: any }) =>
    props.banner ? "transparent" : null};
  color: ${(props: { banner: any }) => (props.banner ? "#401364" : null)};
  ${media.lessThan("huge")`
    padding: 0rem 4em;
  `};
  ${media.lessThan("large")`
  padding: 0rem 1.5em;
  `};
  ${media.lessThan("medium")`
  padding: 0rem 1em;
  `};
  ${media.lessThan("small")`
  padding: 0rem 0.4em;
  `};
`

const Motto = styled.h1`
  font-weight: bold;
  color: #401364;
  font-size: 2.7rem;
  padding-top: 3rem;
  ${media.lessThan("huge")`
    font-size: 2.7rem;
  `};
  ${media.lessThan("large")`
    font-size: 2rem;
    padding-top : 1rem;
  `};
  ${media.lessThan("medium")`
  font-size: 1.9rem;
   padding-top : 0.7rem;
`};
`

const BigTitle = styled.h1`
  color: ${(props: { app: any }) => (props.app ? "blue" : "black")};
  font-size: ${(props: { app: any }) => (props.app ? null : "1.7rem")};
  text-align: ${(props: { app: any }) => (props.app ? "center" : null)};
  ${media.lessThan("medium")`
  font-size : ${(props: { app: any }) => (props.app ? "2.5rem" : null)}
`};
  ${media.lessThan("small")`
    font-size : ${(props: { app: any }) => (props.app ? "2.2rem" : null)}
  `};
`

const Button = styled.button`
  background: ${(props: { download: any }) =>
    props.download ? "#ff21c1" : "transparent"};
  text-align: center;
  border-radius:   ${(props: { rounded: any }) =>
    props.rounded ? "30px" : "5px"};
  height:  55px;
  width: ${(props: { one: any }) => (props.one ? "14rem" : "12rem")};
  border: 2px solid #ff21c1;
  color: ${(props: { download: any }) => (props.download ? "#fff" : "#401364")};
  margin: 0 1rem;
  padding: 0.25rem 0.5rem;
  font-size: 1.2rem;
  transition : all 400ms;
  &:hover {
    color: #401364
    background: #fff;
  }
  ${media.lessThan("medium")`
    margin: 0 0.25rem;
    height:  ${(props: string) => (props.small ? "40px" : "50px")} ;
    font-size:  ${(props: string) => (props.small ? "0.9rem" : "1.1rem")} ;
    border: 1.55px solid #ff21c1;
    font-size : 1.1rem
    width: ${(props: { one: any }) => (props.one ? "14rem" : "9rem")};
`};
${media.lessThan("small")`
  margin: 0 0.25rem;
  height:  45px;
  border: 1.5px solid #ff21c1;
  font-size : 1rem
  width: ${(props: { one: any }) => (props.one ? "14rem" : "9rem")};
`};
`

const Brand = styled.h3`
  color: #f84e06;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 800px;
  ${media.lessThan("medium")`
      font-size: 1.5rem;
  `};
  ${media.lessThan("small")`
      font-size: 1.3rem;
  `};
`

const HeaderBody = styled.nav`
  // box-shadow: 0px 7px 5px grey; would owrk with intersection api
  padding: 0.7rem 2rem;
  background: #22263d;
  position: fixed;
  width: 100%;
  color: #fff;
  a {
    color: #f84e06;

    font-size: 1.05rem;
    text-decoration: none;
  }
  img {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  h3 {
    color: #f84e06;
    word-spacing: 5px;
    font-size: 1.6rem;
  }
  ${media.lessThan("large")`
  padding: 0.7rem 0.3rem;
  padding-top: 10px;
`};
  ${media.lessThan("medium")`
  padding: 0.2rem 0.6rem;
  padding-top: 7px;
`};
  ${media.lessThan("small")`
  padding: 0.5rem 0.3rem;
`};
`

const HBtn = styled.button`
  background: ${(props: { login: any }) =>
    props.login ? "#401364" : "#F84E06"};
  border-radius: 20rem;
  height: 47px;
  width: ${(props: { login: any }) => (props.login ? "8rem" : "10rem")};
  border: ${(props: { login: any }) =>
    props.login ? "1px solid #fff" : " 1.5px solid #F84E06 "};
  color: #fff;
  margin: 0rem 0.5rem;
  outline: none;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  transition: all 400ms;
  &:hover {
    color: #fff;
    background: transparent;
    border: ${(props: { login: any }) =>
      props.login ? "2px solid #fff" : null};
  }
  ${media.lessThan("medium")`
    margin: 0rem 0.25rem;
    height: 40px;
    font-size:  0.9rem;
    border: 1.55px solid #ff21c1;
    border-radius : 10px;
    width: 9rem;
`};
  ${media.lessThan("small")`
  margin: 0 0.25rem;
  height:  45px;
  border: 1.5px solid #ff21c1;
  font-size : 1rem;
  width: ${(props: { one: any }) => (props.one ? "14rem" : "9rem")};
`};
`

const Slider = styled.ul`
  overflow: hidden;
  display: flex;
  list-style: none;
  flex-direction: row;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props: { schedule: any }) =>
    props.schedule ? "50% 40%" : "70% 30%"};
  margin: 2rem 0;
  grid-gap: ${(props: { schedule: any }) =>
    props.schedule ? "2rem 5rem" : "2rem 4rem"};
  p {
    text-align: left;
    width: 80%;
  }
  ${media.lessThan("large")`
    display : flex;
    flex-direction : column;
    align-items : center;
  `};
  ${media.lessThan("medium")`
    display : flex;
    flex-direction : column;
    align-items : center;
    grid-gap: ${(props: { schedule: any }) =>
      props.schedule ? "1rem" : "2rem"};
    `};
  ${media.lessThan("small")`
  display : flex;
  flex-direction : column;
  align-items : center;
  grid-gap: ${(props: { schedule: any }) =>
    props.schedule ? "0rem 1rem" : "1rem"};
  `};
  p {
    padding: 0rem 0.5rem;
    width: 100%;
  }
`

const Switch = styled.div`
  padding: 0rem 0rem;
  border: 2.5px solid #401364;
  width: 35rem;
  background: transparent;
  border-radius: 6px;
  ${media.lessThan("medium")`
     width: 23rem;
    border-radius: 4px;
`};
  ${media.lessThan("small")`
   width: 19rem;
    border-radius: 3px;
`};
`

const SwitchBtn = styled.button`
  padding: 0.5rem 4.35rem;
  border: 0px;
  background: transparent;
  color: #401364;
  outline: none;
  font-weight: bold;
  transition: all 550ms;
  &: hover {
    background: #401364;
    color: #fff;
  }
  ${media.lessThan("medium")`
      padding: 0.5rem 2.25rem;
`};
  ${media.lessThan("small")`
       padding: 0.5rem 1.6rem;
`};
`

const List = styled.li`
  padding: ${(props: { padded: any }) =>
    props.padded ? "0.2rem 14rem" : null};
  ${media.lessThan("large")`
    padding: ${(props: { padded: any }) =>
      props.padded ? "0.2rem 2rem" : null};
`};
  ${media.lessThan("small")`
    padding: ${(props: { padded: any }) =>
      props.padded ? "0.2rem 0.3rem" : null};
`};
  ${media.lessThan("medium")`
    padding: ${(props: { padded: any }) =>
      props.padded ? "0.2rem 1rem" : null};
`};
`

const Footer = styled.footer`
  background: #22263d;
  width: 100%;

  a {
    text-decoration: none;
  }
`

const BlogCards = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  width: 27rem;
  height: auto;
  background: transparent;
  border-radius: 15px;
  ${media.lessThan("large")`
    width : 30rem;
    background: transparent;
  `};
  ${media.lessThan("medium")`
    width : 30rem;
    background: transparent;
  `};
  ${media.lessThan("small")`
    width : 25rem;
    background: transparent;
  `};
`

const fadein = keyframes`
    0% {
      opacity : 0;
    }
    200% {
      opacity : 1;
      cursor: pointer;
    }
`

const CustomImage = styled.img`
  animation: ${fadein} 1000ms ease-in;
  max-height: 50%;
  max-width: 50%;
  ${media.lessThan("large")`
       max-height: 50%;
        max-width: 42%;
    `} ${media.lessThan("medium")`
      max-height: 50%;
      max-width: 42%;
    `};
`

const Hover = styled.div`
  padding: ${props => (props.padded ? "0rem 1rem" : null)};
  &: hover {
    cursor: pointer;
  }
`

const FooterColumnHead = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  ${media.lessThan("large")`
  font-size: 1.1rem;
`};
  ${media.lessThan("medium")`
    font-size: 1.07rem;
  `};
  ${media.lessThan("small")`
  font-size: 0.9rem;
`};
`

const FooterList = styled.li`
  list-style: none;
`

export {
  fadein,
  FooterColumnHead,
  Hover,
  FooterList,
  CustomImage,
  BlogCards,
  Footer,
  Grid,
  List,
  Switch,
  SwitchBtn,
  Slider,
  Contain,
  HBtn,
  HeaderBody,
  Text,
  Title,
  Brand,
  Cards,
  Motto,
  Items,
  CustomCard,
  BgTitle,
  Body,
  BigTitle,
  Button,
}
