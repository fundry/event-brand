import React from "react"
import { Link } from "gatsby"
import { FeaturesList } from "../../../data"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"
import styled from "styled-components"

import { Contain, Text, Title, BgTitle, Items } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"

const Card = styled.div`
  width: 90rem;
  background: #fff;
  padding: 1rem 1rem;
  border: 6px;
  box-shadow: 0px 2px 3px grey;
`

const Integration = (props): JSX.Element => {
  const hooks = useWindowWidth()
  return (
    <Contain>
      <br />
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card>
          <br />
          <BgTitle center support>
            Integrate With Your External Tools
          </BgTitle>
          <Text items center>
            Bring in your external tools to manage your events better on Oasis.
          </Text>
          <br />

          {hooks >= 1000 ? (
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
                            maxWidth: "60%",
                            padding: "0.5em",
                          }}
                        />
                      </Flex>
                      <br />
                      <Title bold>{title}</Title>

                      <Text small center>
                        {text}
                      </Text>

                      <Flex justifyCenter>
                        <Link to="" style={{ textDecoration: "none" }}>
                          <Flex>
                            <p> Learn More </p>
                            <IoIosArrowForward
                              style={{ fontSize: "1.5em", paddingLeft: "5px" }}
                            />
                          </Flex>
                        </Link>
                      </Flex>
                    </Contain>
                  </div>
                )
              })}
            </Flex>
          ) : (
            <Items>
              {FeaturesList.map(({ title, id, text }) => {
                return (
                  <div>
                    <Contain key={id} center>
                      <Flex justifyCenter>
                        <img
                          src={require(`../../../assets/images/${id}.png`)}
                          alt="feature"
                          style={{
                            maxHeight: "50%",
                            maxWidth: "70%",
                            padding: "1em",
                          }}
                        />
                      </Flex>
                      <Title features>{title}</Title>

                      <Text items>{text}</Text>

                      <Link to="">
                        <Flex justifyCenter>
                          <p> Learn More </p>
                          <IoIosArrowForward
                            style={{ fontSize: "1.5em", paddingLeft: "5px" }}
                          />
                        </Flex>
                      </Link>
                    </Contain>
                  </div>
                )
              })}
            </Items>
          )}
          <br />
        </Card>
      </div>

      <br />
      <br />
      <br />
    </Contain>
  )
}

export default Integration
