import styled from "styled-components"
import media from "styled-media-query"
import { Card } from "react-bootstrap"

const Text = styled.p`
  color: #401364;
  font-size: ${props => (props.items ? "1.27em " : "1.3em")};
  text-align: ${props => (props.items ? "center" : null)};

  ${media.lessThan("medium")`
  font-size: ${props => (props.items ? "1.10em " : "1.20em")};
  text-align: ${props => (props.items ? "center" : null)};
`};

  ${media.lessThan("large")`
font-size: ${props => (props.items ? "1.20em " : "1.27em")};
text-align: ${props => (props.items ? "center" : null)};
`};

  ${media.lessThan("small")`
font-size: ${props => (props.items ? "1em " : "1.10em")};
text-align: ${props => (props.items ? "center" : null)};
  `};
`

const Title = styled.h4`
  font-weight: ${props => (props.features ? "520" : "normal")};
  text-align: ${props => (props.features ? "center" : null)};
`

const autoGrid = (minColumnWidth = 200, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
})

const Items = styled.div({
  ...autoGrid(220, 20),
  padding: "3em",
  marginLeft: "1.5em",
})

const CustomCard = styled(Card)`
  &:hover {
    box-shadow: 0px 3px 4px grey;
  }
`

const BgTitle = styled.h1`
  font-weight: bold;
  font-size: ${props => (props.support ? "1.75em" : "2em")}
    ${media.lessThan("medium")`
    font-size : ${props => (props.support ? "1.7em" : "2.05em")}
  `};
  ${media.lessThan("large")`
  font-size : ${props => (props.support ? "1.77em" : "2em")}
  `};
  ${media.lessThan("small")`
    font-weight: 550;
      font-size : ${props => (props.support ? "1.27em" : "1.40em")}
    `};
`

const Body = styled.div`
  padding-left: ${props => (props.banner ? "12em" : "8em")};
  padding-right: ${props => (props.banner ? "12em" : "8em")};
  background: ${props => (props.banner ? "transparent" : null)};
  color: ${props => (props.banner ? "#401364" : null)};
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
  color: ${props => (props.app ? "blue" : "black")};
  font-size: ${props => (props.app ? null : "1.7em")};
  text-align: ${props => (props.app ? "center" : null)};
  ${media.lessThan("medium")`
  font-size : ${props => (props.app ? "2.5em" : null)}
`};
  ${media.lessThan("small")`
    font-size : ${props => (props.app ? "2.2em" : null)}
  `};
`

const Button = styled.button`
  background: ${props => (props.download ? "#ff21c1" : "transparent")};
  text-align: center;
  border-radius: 5px;
  height:  50px;
  width: ${props => (props.one ? "17em" : "12em")};
  border: 2px solid #ff21c1;
  color: ${props => (props.download ? "#fff" : "#401364")};
  margin: 0 1em;
  padding: 0.25em 0.5em;
  font-size: 1.2em;
  &:hover {
    color: #401364
    background: #fff;
  }
  ${media.lessThan("medium")`
    margin: 0 0.25em;
    height:  ${props => (props.small ? "40px" : "50px")} ;
    font-size:  ${props => (props.small ? "0.9em" : "1.1em")} ;
    border: 1.55px solid #ff21c1;
    font-size : 1.1em
    width: ${props => (props.one ? "14em" : "9em")};
`};
${media.lessThan("small")`
  margin: 0 0.25em;
  height:  45px;
  border: 1.5px solid #ff21c1;
  font-size : 1em
  width: ${props => (props.one ? "14em" : "9em")};
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
  padding: 0.7em 0.3em;
  background-color: transparent;
  color: #0b33a2;
  a {
    color: #0b33a2;
    font-size: 1.05em;
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
`

const HBtn = styled.button`
  background: ${props => (props.login ? "#401364" : "#ff21c1")};
  border-radius: 20rem;
  height: 47px;
  width: ${props => (props.login ? "7em" : "9em")};
  border: ${props => (props.login ? "1px solid #fff" : " 1px solid #ff21c1 ")};
  color: #fff;
  margin: 0rem 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  &:hover {
    color: #401364;
    background: #f2f5ff;
    border: ${props => (props.login ? "2px solid #401364" : null)};
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
  width: ${props => (props.one ? "14em" : "9em")};
`};
`

export {
  HBtn,
  HeaderBody,
  Text,
  Title,
  Brand,
  Motto,
  Items,
  CustomCard,
  BgTitle,
  Body,
  BigTitle,
  Button,
}
