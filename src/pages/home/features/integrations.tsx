import React, { Component } from "react"
import { Link } from "gatsby"
import { FeaturesList } from "../../../data"
import Flex from "styled-flex-component"
import styled from "styled-components"

import { Contain, Text, Title, BgTitle } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"
import { FiArrowRight, FiChevronRight } from "react-icons/fi"

const OpaqueButton = styled.button`
  padding: 0.8rem 1rem;
  color: #401364;
  border: 0px;
  outline: 0px;
  font-size: 1.1rem;
  display: flex;
  border-radius: 15px;
  transition: all 500ms;
  &: hover {
    background: #401364;
    color: #fff;
    border-radius: 15px;
  }
`

const TextLink = styled(Text)`
  font-size: 1em;
`

const Card = styled.div`
  width: 90rem;
  background: #fff;
  padding: 1rem 1rem;
  border: 6px;
  box-shadow: 0px 2px 3px grey;
  transition: all 500ms;
  opacity: ${(props: { opacity: any }) => props.opacity};
`

export default class Integrations extends Component {
  state = {
    opacity: 0,
  }

  componentDidMount() {
    //@ts-ignore
    this.observer = new window.IntersectionObserver(this.observerCallback, {
      threshold: 0.5,
    })

    //@ts-ignore
    this.observer.observe(this.container)
  }

  //@ts-ignore
  observerCallback = entries => {
    setTimeout(() => {
      const entry = entries.slice(0).shift()
      if (entry.isIntersecting) {
        this.setState({
          opacity: 1,
        })
      }
    }, 50)
  }

  componentWillUnmount() {
    //@ts-ignore
    this.observer.unobserve(this.container)
  }

  render() {
    return (
      <Contain>
        <br />
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            ref={(node: any) => (this.container = node)}
            style={{ opacity: this.state.opacity }}
          >
            <br />
            <BgTitle center>Integrate With Your External Tools</BgTitle>
            <Text small items center>
              Bring in your external tools to manage your events better on
              Oasis.
            </Text>
            <br />

            <Flex justifyBetween>
              {FeaturesList.map(({ title, id, text }) => {
                return (
                  <div>
                    <Contain key={id} center>
                      <Flex justifyCenter>
                        <img
                          src={require(`../../../assets/images/${id}.png`)}
                          alt="feature"
                          style={{
                            height: "auto",
                            maxWidth: "50%",
                            padding: "0.5em",
                          }}
                        />
                      </Flex>
                      <br />
                      <div style={{ margin: "1rem 0.7rem" }}>
                        <Title>{title}</Title>

                        <Text small center>
                          {text}
                        </Text>

                        <Flex justifyCenter>
                          <Link to="" style={{ textDecoration: "none" }}>
                            <Flex>
                              <TextLink small bold>
                                Read More
                              </TextLink>

                              <FiChevronRight style={{ fontSize: "1.8rem" }} />
                            </Flex>
                          </Link>
                        </Flex>
                      </div>
                    </Contain>
                  </div>
                )
              })}
            </Flex>
            <br />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              .
              <Link to="/docs/tools" style={{ textDecoration: "none" }}>
                <OpaqueButton>
                  Learn more about integrations
                  <div style={{ margin: "0rem 0.7rem" }}>
                    <FiArrowRight style={{ fontSize: "1.6rem" }} />
                  </div>
                </OpaqueButton>
              </Link>
            </div>
            <br />
          </Card>
        </div>

        <br />
        <br />

        <br />
        <br />
      </Contain>
    )
  }
}
