import React, { useState } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import media from "styled-media-query"

import { Text, Contain, Title, HeadTitle, Body } from "../../../styles/style"

import "./test.css"

const CircleList = styled.li`
  list-style: none;
  margin: 1.3rem 0rem;
`

const Circle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #f84e06;
  background: ${(props: { ActiveColumn: any }) =>
    props.ActiveColumn ? "#f84e06" : "transparent"};
  transition: all 400ms;
  div {
    display: ${props => (props.TipState ? "flex" : "none")};
    visibility: ${props => (props.TipState ? "visible" : "hidden")};
    justify-content: center;
    align-items: center;
  }
  &: hover {
    cursor: pointer;
    background: #f84e06;
    color: #fff;
    visibility: visible;
    div {
      visibility: visible;
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem 2rem;
  grid-template-columns: auto 25rem; 
  p {
    width : 80%;
    padding : 0rem 0.5rem
  }
  ${media.lessThan("large")`
      grid-gap: 0rem 0rem;
      grid-template-columns: auto 25rem; 
      p {
        padding : 0rem 0rem
      }
  `};
  ${media.lessThan("medium")`
  display : flex;
  flex-direction : column;
  align-items: center;
  p {
    padding : 0.4rem 0rem
  }
    `};
};
`

const Tooltip = styled.div`
  height: 50px;
  position: absolute;
  width: 10rem;
  transform: translate(-115%);
  padding: 0.5rem 0.5rem;
  border: 1px solid #000;
  background: #22263d;
  margin: -0.5rem 0;
  text-align: center;
  border-radius: 5px;
  color: #fff;
`

const Tip = styled.div`
  position: absolute;
  transform: translate(-70%) rotate(180deg);
  margin: -0.3rem 0;
  width: 0;
  height: 0;
  overflow: hidden;
  border: 20px solid transparent;
  border-right-color: #22263d;
`

const Experience = () => {
  const [ActiveColumn, setActiveColumn] = useState<string>("archives")
  const [TipState, setTipState] = useState<string>("archives")

  const [PrevsTipState, setPrevsTipState] = useState<string>("archives")

  return (
    <Body>
      <Body>
        <br />
        <Contain>
          <HeadTitle color="#401364">
            Event <span style={{ color: "#F84E06" }}>Long Term Support </span>
          </HeadTitle>

          <div style={{ display: "grid", gridTemplateColumns: "auto 4rem" }}>
            <div>
              <br />
              <CSSTransition
                in={ActiveColumn === "archives"}
                timeout={300}
                classNames={""}
                unmountOnExit
              >
                <Grid>
                  <div>
                    <Title style={{ color: "#401364" }}>
                      Compiled Event Archives{" "}
                    </Title>{" "}
                    <Text small>
                      Give your attendees the oppurtunity to make an informed
                      choice about your event by going through an automatically
                      compiled archive of your event.
                    </Text>
                    <br />
                  </div>
                </Grid>
              </CSSTransition>

              <CSSTransition
                in={ActiveColumn === "versioned"}
                timeout={300}
                classNames={""}
                unmountOnExit
              >
                <div>
                  <br />
                  <Title style={{ color: "#401364" }}>
                    Semantically Versioned Events
                  </Title>{" "}
                  <br />
                  <Text> See event Archive </Text>
                  <br />
                </div>
              </CSSTransition>

              <CSSTransition
                in={ActiveColumn === "templates"}
                timeout={300}
                classNames={""}
                unmountOnExit
              >
                <div>
                  <br />
                  <Title style={{ color: "#401364" }}>
                    {" "}
                    Event Templates{" "}
                  </Title>{" "}
                  <br />
                  <Text> See event Archive </Text>
                  <br />
                </div>
              </CSSTransition>
              <br />
            </div>

            <div>
              <CircleList>
                <Circle
                  onClick={() => setActiveColumn("archives")}
                  ActiveColumn={ActiveColumn === "archives"}
                  TipState={TipState === "archives"}
                  onMouseEnter={() => {
                    setPrevsTipState("archives")
                    setTipState("archives")
                  }}
                  onMouseLeave={() => setTipState(PrevsTipState)}
                >
                  <Tip />
                  <Tooltip> Event Archives </Tooltip>
                </Circle>
              </CircleList>

              <CircleList>
                <Circle
                  onClick={() => setActiveColumn("Templates")}
                  ActiveColumn={ActiveColumn === "Templates"}
                  TipState={TipState === "Templates"}
                  onMouseEnter={() => {
                    setPrevsTipState("Templates")
                    setTipState("Templates")
                  }}
                  onMouseLeave={() => setTipState(PrevsTipState)}
                >
                  <Tip />
                  <Tooltip> Event Templates </Tooltip>
                </Circle>
              </CircleList>

              <CircleList>
                <Circle
                  onClick={() => setActiveColumn("Themes")}
                  ActiveColumn={ActiveColumn === "Themes"}
                  TipState={TipState === "Themes"}
                  onMouseEnter={() => {
                    setPrevsTipState("Themes")
                    setTipState("Themes")
                  }}
                  onMouseLeave={() => setTipState(PrevsTipState)}
                >
                  <Tip />
                  <Tooltip> Event Themes </Tooltip>
                </Circle>
              </CircleList>

              <CircleList>
                <Circle
                  onClick={() => setActiveColumn("Something")}
                  ActiveColumn={ActiveColumn === "Something"}
                  TipState={TipState === "Something"}
                  onMouseEnter={() => {
                    setPrevsTipState("Templates")
                    setTipState("Something")
                  }}
                  onMouseLeave={() => setTipState(PrevsTipState)}
                >
                  <Tip />
                  <Tooltip> Event Something </Tooltip>
                </Circle>
              </CircleList>
            </div>
          </div>
        </Contain>
        <br />
        <br />
      </Body>
    </Body>
  )
}

export default Experience
