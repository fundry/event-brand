import React from "react"
import { Link } from "gatsby"
import { FeaturesList } from "../../../data"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"

import { Contain, Text, Title, BgTitle, Items } from "../../../styles/style"
import useWindowWidth from "../../../styles/resize"

const Integration = (props): JSX.Element => {
  const hooks = useWindowWidth()
  return (
    <Contain>
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
                  <Title small features>
                    {title}
                  </Title>

                  <Text small items>
                    {text}
                  </Text>

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
    </Contain>
  )
}

export default Integration
