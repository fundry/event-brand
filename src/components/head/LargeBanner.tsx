import React from "react"
import Flex from "styled-flex-component"
import { DiAppstore, DiAndroid } from "react-icons/di"
import styled from "styled-components"

import { Text, Button, CustomImage, Motto, Title } from "../../styles/style"
import Ipad from "../../assets/svg/ipad.svg"
import { FaAppStore, FaDesktop } from "react-icons/fa"

const Available = styled.div`
  margin: 1rem 1rem;
  padding: 0.5rem 2rem;
  h6 {
    font-weight: normal;
    border-bottom: 1px solid grey;
  }
  div {
    display: flex;
    border-bottom: 0px;
    color: #5919ab;
    justify-content: space-around;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem 7rem;
  grid-template-columns: 50% 50%;
`

const LargeBanner = () => {
  return (
    <div>
      <Motto style={{ textAlign: "center", margin: "0.2rem  0.2em" }}>
        Launch, Manage and Organize Modern Events.
      </Motto>
      <br />
      <Title bold support style={{ textAlign: "center" }} items>
        Redefining the regular event experience!
      </Title>
      <br />
      <br />

      <Grid>
        <CustomImage
          style={{ marginLeft: "5rem" }}
          src={Ipad}
          alt="illustration here"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "40rem",
            flexDirection: "column",
          }}
        >
          <Text style={{ textAlign: "right" }} items>
            Redefining the regular event experience! Redefining the regular
            event experience! Redefining the regular event regular event
          </Text>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button download rounded style={{ textAlign: "center" }}>
              Host An Event
            </Button>
          </div>

          <Available style={{ textAlign: "right" }}>
            <h6 style={{ color: "grey" }}>AVAILABLE VIA: </h6>
            <div style={{ display: "flex" }}>
              <div>
                <div style={{ padding: "0.1rem 0.5rem" }}>
                  <FaDesktop style={{ fontSize: "1.7rem" }} />
                </div>

                <Text small>Web Console</Text>
              </div>

              <div>
                <div style={{ padding: "0.1rem 0.5rem" }}>
                  <DiAppstore style={{ fontSize: "1.7rem" }} />
                </div>
                <Text small>Ios Devices</Text>
              </div>

              <div>
                <div style={{ padding: "0.1rem 0.5rem" }}>
                  <DiAndroid style={{ fontSize: "1.7rem" }} />
                </div>
                <Text small>Android Device</Text>
              </div>
            </div>
          </Available>
        </div>
      </Grid>
    </div>
  )
}

export default LargeBanner
