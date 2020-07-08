import React, { useState, useEffect } from "react"
import { FiArrowRight } from "react-icons/fi"
import Flex from "styled-flex-component"
import styled from "styled-components"

import Illustration from "../../assets/svg/illustration.svg"
import { Text, CustomImage, Motto, HeadTitle } from "../../styles/style"

const Button = styled.button`
  padding: 0.7rem 1rem;
  transition: all 450ms;
  border: 1px solid #ed7440;
  border-radius: 8px;
  font-size: 1.2rem;
  background: #ed7440;
  width: 20rem;
  color: #fff;
  box-shadow: 0px 1px 2px grey;
  &: hover {
    background: transparent;
    border: 1px solid #ed7440;
    color: #fff;
  }
`

const LargeBanner = () => {
  const [currentText, setText] = useState<string>("Events")
  const [time, setTime] = useState<number>(300)
  const [currentItem, setCurrentItem] = useState<number>(0)

  const words = ["Events", "Communities", "Talk Drafts"]

  useEffect(() => {
    setText(words[currentItem])
  }, [currentItem])

  return (
    <div>
      <Flex justifyAround>
        <CustomImage src={Illustration} alt="illustration here" />

        <div style={{ paddingRight: "20px" }}>
          <Flex column>
            <br />
            <br />
            <br />
            <br />
            <Motto style={{ textAlign: "center", margin: "1rem  0.2em" }}>
              Launch, Plan, and Manage your <br />{" "}
              <span style={{ color: "#ED7440" }}> {currentText} . </span>
            </Motto>

            <Text style={{ textAlign: "center" }} items>
              Redefining the regular event experience!
            </Text>
            <Flex justifyCenter>
              <Button
                onClick={() => {
                  currentItem + 1
                }}
                one
                download
                rounded
                style={{ textAlign: "center" }}
              >
                <Flex justifyCenter>
                  Get Started
                  <div style={{ paddingLeft: "20px" }}>
                    <FiArrowRight style={{ fontSize: "1.6em" }} />
                  </div>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </div>
  )
}

export default LargeBanner
