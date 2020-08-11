import React from "react"
import {
  BigTitle,
  Body,
  Text,
  Title,
  Button,
  CustomButton,
} from "../../styles/style"
import styled from "styled-components"
import media from "styled-media-query"
import { IoIosSend } from "react-icons/io"

const Testing = styled.div`
  text-align: center;
  display: flex;
  height: auto;
  padding: 3rem 0;
  flex-direction: column;
  justify-content: center;
  background: #2153cc;
  color: #fff;
  div {
    text-align: center;
  }
`
const InputBox = styled.div`
  display: flex;
  width: 35rem;
  background: #fff;
  input {
    display: flex;
    flex: 1;
    width: auto;
    color: #0e2f5a;
    font-size: 1.1rem;
    padding: 0.7rem 1rem;
    border: 1px solid #fff;
    background: transparent;
    outline: 1px solid #0e2f5a;
  }
  div {
    height: auto;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f84e06;
    cursor: pointer;
  }
  ${media.lessThan("large")`
    width: 32rem;
    input {
      display: flex;
      flex: 1;
      width: auto;
      color: #0e2f5a;
      font-size: 1rem;
      paddif84e06ng: 0.6rem 0.7rem;
      border: 1px solid #fff;
    }
    div {
      width: 3rem;
      background: #f84e06;
    }
`}
  ${media.lessThan("medium")`
width: 28rem;
input {
  display: flex;
  flex: 1;
  width: auto;
  color: #0e2f5a;
  font-size: 0.9rem;
  padding: 0.6rem 0.7rem;
  border: 1px solid #fff;
}
div {
  width: 2.7rem;
  background: #f84e06;
}
`}
`

const FreeTrial = () => {
  return (
    <div>
      <Testing>
        <BigTitle style={{ fontWeight: "normal" }}>
          Contemplating running an event ?{" "}
        </BigTitle>

        <div>
          <Text small white>
            Thinking of Organizing an event? <br />
            Oasis is flexible enough to upscale and downscale automatically to
            fit your event needs.
          </Text>
          <br />
          <Text small white>
            Lets have a chat about your event.
          </Text>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton style={{ margin: "0 2rem" }}>
              View Event Guides
            </CustomButton>
            <CustomButton style={{ margin: "0 2rem" }}>
              View Event Guides
            </CustomButton>
          </div>
        </div>
      </Testing>
    </div>
  )
}

export default FreeTrial
