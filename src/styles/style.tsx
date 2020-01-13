import styled from "styled-components"
import media from "styled-media-query"
import { Card } from "react-bootstrap"

const Text = styled.p`
  font-size: ${props => (props.items ? "1.27em " : "1.3em")};
  text-align: ${props => (props.items ? "center" : null)};
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
  font-size : ${props => (props.support ? "1.77em" : "2.1em")}
  `};
  ${media.lessThan("small")`
      font-size : ${props => (props.support ? "1.7em" : "2em")}
    `};
`

const Body = styled.div`
  padding-left: ${props => (props.banner ? "12em" : "8em")};
  padding-right: ${props => (props.banner ? "12em" : "8em")};
  background: ${props => (props.banner ? "transparent" : null)};
  color: ${props => (props.banner ? "#401364" : null)};
  ${media.lessThan("large")`
  padding-left: 4em;
  padding-right: 4em;
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
  ${media.lessThan("medium")`
  font-size: 2.5em
`};
  font-weight: bold;
`

const BigTitle = styled.h1`
  color: ${props => (props.app ? "blue" : "black")};
  font-size: ${props => (props.app ? null : "1.7em")};
  text-align: ${props => (props.app ? "center" : null)};
`

const Button = styled.button`
  background: ${props => (props.download ? "#ff21c1" : "transparent")};
  text-align: center;
  border-radius: 5px;
  height:  50px;
  width: ${props => (props.one ? "15em" : "12em")};
  border: 2px solid #ff21c1;
  color: ${props => (props.download ? "#fff" : "#401364")};
  margin: 0 1em;
  padding: 0.25em 0.5em;
  font-size: 1.3em;
  &:hover {
    color: #401364
    background: #fff;
  }
  ${media.lessThan("medium")`
    margin: 0 0.25em;
    height:  50px;
    border: 1.7px solid #ff21c1;
    width: ${props => (props.one ? "13em" : "9em")};
`};
`

export {
  Text,
  Title,
  Motto,
  Items,
  CustomCard,
  BgTitle,
  Body,
  BigTitle,
  Button,
}
