import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h3`
  color: blue;
`

const Contain = styled.div`
  padding: 0.5em;
`

const Organizers = () => {
  return (
    <Body>
      <Title style={{ textAlign: "left", paddingLeft: "10px" }}>
        {" "}
        Event for Organizers{" "}
        <Flex justifyBetween>
          <img src="../../../svg/assets/safari.svg" alt="ipad" />

          <Contain style={{ paddingRight: "20px" }}>
            <Flex column>
              <Title style={{ textAlign: "right", fontSize: "1.1em" }}>
                {" "}
                Create and Manage Events
              </Title>
              <br />

              <Title style={{ textAlign: "right", fontSize: "1.1em" }}>
                {" "}
                Store and Manage Event Assets{" "}
              </Title>
              <br />

              <Title style={{ textAlign: "right", fontSize: "1.1em" }}>
                {" "}
                Co-ordinate Collaborators{" "}
              </Title>
              <br />
            </Flex>
          </Contain>
        </Flex>
      </Title>
    </Body>
  )
}

export default Organizers
