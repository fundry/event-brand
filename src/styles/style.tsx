import styled from "styled-components"
import media from "styled-media-query"
import { Card } from "react-bootstrap"

const Text = styled.p`
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
  font-weight: bold;
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
  font-size: 1.3em;
  &:hover {
    color: #401364
    background: #fff;
  }
  ${media.lessThan("medium")`
    margin: 0 0.25em;
    height:  50px;
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
