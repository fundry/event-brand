// @ts-ignore
import styled from "styled-components"
import media from "styled-media-query"
import { Card } from "react-bootstrap"

const Contain = styled.div`
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  max-width: ${(props: { width: any }) => (props.width ? "900px" : null)};
  width: ${(props: { widthed: any }) => (props.widthed ? "45rem" : null)};
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
  color: ${props => (props.white ? "#fff" : "#401364")};
  font-weight: ${(props: string) => (props.bold ? "700" : null)};
  font-size: ${(props: { small: any }) => (props.small ? "1.27em " : "1.3em")};
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  ${media.lessThan("medium")`
  font-size: ${(props: { small: any }) => (props.small ? "1em " : "1.20em")};
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
`};
  ${media.lessThan("large")`
font-size: ${(props: { small: any }) => (props.small ? "1.1em " : "1.27em")};
text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
`};
  ${media.lessThan("small")`
font-size: ${(props: { small: any }) => (props.small ? "1em " : "1.10em")};
text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  `};
`

const Title = styled.h4`
color: ${(props: { colored: any }) => (props.colored ? "#401364" : "#000")}
  font-weight: ${(props: { bold: any }) => (props.bold ? "520" : "normal")};
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  ${media.lessThan("medium")`
    font-size :  1.5rem;
  `};
  ${media.lessThan("large")`
      font-size :  1.5rem;
  `};
  ${media.lessThan("small")`
       font-size :  1.5rem;
    `};
`

const autoGrid = (minColumnWidth = 200, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
})

const Items = styled.div({
  ...autoGrid(220, 20),
  padding: "1em",
  marginLeft: "1.5em",
})

const CustomCard = styled(Card)`
  border: 1px solid grey;
  box-shadow: 1px 7px 5px grey;
  transition: transform 1s;
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
  font-weight: bold;
  text-align: ${(props: { center: any }) => (props.center ? "center" : null)};
  font-size: ${(props: { support: any }) => (props.support ? "1.75em" : "2em")}
    ${media.lessThan("medium")`
    font-size : ${(props: { support: any }) =>
      props.support ? "1.7em" : "2.05em"}
  `};
  ${media.lessThan("large")`
  font-size : ${(props: { support: any }) => (props.support ? "1.77em" : "2em")}
  `};
  ${media.lessThan("small")`
    font-weight: 550;
      font-size : ${(props: { support: any }) =>
        props.support ? "1.27em" : "1.40em"}
    `};
`

const Body = styled.div`
  padding-left: ${(props: { banner: any }) => (props.banner ? "12em" : "8em")};
  padding-right: ${(props: { banner: any }) => (props.banner ? "12em" : "8em")};
  background: ${(props: { banner: any }) =>
    props.banner ? "transparent" : null};
  color: ${(props: { banner: any }) => (props.banner ? "#401364" : null)};
  ${media.lessThan("large")`
  padding-left: 3em;
  padding-right: 3em;
  `};
  ${media.lessThan("medium")`
  padding-left: 1.5em;
  padding-right: 1.5em;
  `};
  ${media.lessThan("small")`
  padding-left: 0.4em;
  padding-right: 0.4em;
  `};
`

const Motto = styled.h1`
  font-weight: bold;
  color: #401364;
  ${media.lessThan("medium")`
  font-size: 2em
`};
  ${media.lessThan("small")`
font-size: 1.5em
`};
`

const BigTitle = styled.h1`
  color: ${(props: { app: any }) => (props.app ? "blue" : "black")};
  font-size: ${(props: { app: any }) => (props.app ? null : "1.7em")};
  text-align: ${(props: { app: any }) => (props.app ? "center" : null)};
  ${media.lessThan("medium")`
  font-size : ${(props: { app: any }) => (props.app ? "2.5em" : null)}
`};
  ${media.lessThan("small")`
    font-size : ${(props: { app: any }) => (props.app ? "2.2em" : null)}
  `};
`

const Button = styled.button`
  background: ${(props: { download: any }) =>
    props.download ? "#ff21c1" : "transparent"};
  text-align: center;
  border-radius:   ${(props: { rounded: any }) =>
    props.rounded ? "30px" : "5px"};
  height:  55px;
  width: ${(props: { one: any }) => (props.one ? "14em" : "12em")};
  border: 2px solid #ff21c1;
  color: ${(props: { download: any }) => (props.download ? "#fff" : "#401364")};
  margin: 0 1em;
  padding: 0.25em 0.5em;
  font-size: 1.2em;
  &:hover {
    color: #401364
    background: #fff;
  }
  ${media.lessThan("medium")`
    margin: 0 0.25em;
    height:  ${(props: string) => (props.small ? "40px" : "50px")} ;
    font-size:  ${(props: string) => (props.small ? "0.9em" : "1.1em")} ;
    border: 1.55px solid #ff21c1;
    font-size : 1.1em
    width: ${(props: { one: any }) => (props.one ? "14em" : "9em")};
`};
${media.lessThan("small")`
  margin: 0 0.25em;
  height:  45px;
  border: 1.5px solid #ff21c1;
  font-size : 1em
  width: ${(props: { one: any }) => (props.one ? "14em" : "9em")};
`};
`

const Brand = styled.p`
  color: #ff21c1;
  text-decoration#: none;
  font-size: 25px;
  font-weight: 800px;
  ${media.lessThan("medium")`
      font-size: 30px
  `};
`

const HeaderBody = styled.nav`
  box-shadow: 0px 4px 5px grey;
  padding: 1em 0.3em;
  background-color: #fff;
  position: fixed;
  width: 100%;
  color: #0b33a2;
  a {
    color: #0b33a2;
    font-size: 1.05em;
    text-decoration: none;
  }
  img {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  h3 {
    color: #ff21c1;
    word-spacing: 5px;
    font-size: 1.6rem;
  }
  ${media.lessThan("large")`
  padding: 0.7em 0.3em;
  padding-top: 10px;
`};
  ${media.lessThan("medium")`
  padding: 0.3em 0.3em;
  padding-top: 15px;
`};
  ${media.lessThan("small")`
  padding: 0.5em 0.3em;
`};
`

const HBtn = styled.button`
  background: ${(props: { login: any }) =>
    props.login ? "#401364" : "#ff21c1"};
  border-radius: 20rem;
  height: 47px;
  width: ${(props: { login: any }) => (props.login ? "8em" : "10em")};
  border: ${(props: { login: any }) =>
    props.login ? "1px solid #fff" : " 1.5px solid #ff21c1 "};
  color: #fff;
  margin: 0rem 0.5rem;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  &:hover {
    color: #401364;
    background: transparent;
    border: ${(props: { login: any }) =>
      props.login ? "2px solid #401364" : null};
  }
  ${media.lessThan("medium")`
    margin: 0em 0.25em;
    height: 40px;
    font-size:  0.9em;
    border: 1.55px solid #ff21c1;
    border-radius : 10px;
    width: 9em;
`};
  ${media.lessThan("small")`
  margin: 0 0.25em;
  height:  45px;
  border: 1.5px solid #ff21c1;
  font-size : 1em;
  width: ${(props: { one: any }) => (props.one ? "14em" : "9em")};
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
    props.schedule ? "55% 45%" : "70% 30%"};
  grid-gap: ${(props: { schedule: any }) => (props.schedule ? "2rem" : "4rem")};
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
  background: #5919ab;
  width: 100%;

  a {
    text-decoration: none;
  }
`

export {
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
