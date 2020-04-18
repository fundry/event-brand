import React from "react"
import { Link } from "gatsby"
import { FeaturesList } from "../../../data"
import Flex from "styled-flex-component"
import { IoIosArrowForward } from "react-icons/io"

import { Contain, Text, Title, BgTitle, Items } from "../../../styles/style"
import Feature from "../../../assets/svg/features.svg"
import useWindowWidth from "../../../styles/resize"

const Integration = (props): JSX.Element => {
  const hooks = useWindowWidth()
  return (
    <Contain>
      <br />
      <BgTitle center support>
        Integrate With Your External Tools{" "}
      </BgTitle>
      <Text items>
        Use your existing ticket managers while managing other aspects of your
        event within Eventful
      </Text>
      {hooks >= 1000 ? (
        <Flex justifyBetween>
          {FeaturesList.map(({ title, id, text }) => {
            return (
              <div>
                <Contain key={id} center>
                  <Flex justifyCenter>
                    <img
                      src={Feature}
                      alt="feature"
                      style={{
                        maxHeight: "50%",
                        maxWidth: "70%",
                        padding: "1em",
                      }}
                    />
                  </Flex>
                  <Title bold>{title}</Title>

                  <Text small center>
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
        </Flex>
      ) : (
        <Items>
          {FeaturesList.map(({ title, id, text }) => {
            return (
              <div>
                <Contain key={id} center>
                  <Flex justifyCenter>
                    <img
                      src={Feature}
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
    </Contain>
  )
}

export default Integration
