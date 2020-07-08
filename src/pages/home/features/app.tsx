import React from "react"
import Flex from "styled-flex-component"
import { DiAppstore } from "react-icons/di"
import { FaGooglePlay } from "react-icons/fa"
import styled from "styled-components"

import Android from "../../../assets/svg/android.svg"
import {
  Text,
  Contain,
  BgTitle,
  BigTitle,
  Button,
  HeadTitle,
  Title,
} from "../../../styles/style"
import { AppFeatures } from "../../../data"

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
};
`

const Items = [
  {
    id: 1,
    title: "Realtime Event Schedules",
    text: "View event schedules on the go!",
  },
  {
    id: 1,
    title: "Realtime Event Schedules",
    text: "View event schedules on the go!",
  },
  {
    id: 1,
    title: "Realtime Event Schedules",
    text: "View event schedules on the go!",
  },
]

const ItemBody = styled.div`
  margin: 1rem;
  li {
    list-style: none;
    border: 2px solid violet;
    border-radius: 5px;
    padding: 0.5rem 0.5rem;
    width: 25rem;
    margin: 4rem 0rem;
    h3 {
      font-size: 1.4rem;
      font-weight: normal;
    }
  }
`

const App = () => {
  return (
    <Contain>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HeadTitle center style={{ margin: "0rem 1rem" }}>
          {" "}
          Oasis is a Tool. <span style={{ color: "#ED7440" }}>
            {" "}
            Wield It!{" "}
          </span>{" "}
        </HeadTitle>
      </div>

      <br />
      <br />
      <Grid>
        <ItemBody>
          {Items.map(({ id, title, text }) => {
            return (
              <li key={id}>
                <h3> {title} </h3>
                <p> {text} </p>
              </li>
            )
          })}
        </ItemBody>

        <div>
          <Flex justifyCenter>
            <img
              alt="android"
              style={{ maxHeight: "50%", maxWidth: "65%", paddingTop: "1%" }}
              src={Android}
            />
          </Flex>

          <Contain>
            <BigTitle app>Get the App! </BigTitle>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text style={{ width: "55rem" }} padded small center>
                Manage events Manage events Manage events Manage events Manage
              </Text>
            </div>
            <br />
            <Flex justifyCenter>
              <Flex>
                <Button download two style={{ marginRight: "25px" }}>
                  <Flex justifyCenter>
                    <div style={{ paddingRight: "7px" }}>
                      <DiAppstore style={{ fontSize: "1.7em" }} />{" "}
                    </div>
                    Apple Store
                  </Flex>
                </Button>

                <div style={{ textAlign: "center" }}>
                  <Button download one style={{ width: "11em" }}>
                    <Flex justifyCenter>
                      <div style={{ paddingRight: "7px" }}>
                        <FaGooglePlay style={{ fontSize: "1.6em" }} />{" "}
                      </div>
                      Play Store
                    </Flex>
                  </Button>
                </div>
              </Flex>
            </Flex>
            <br />

            <br />
          </Contain>
        </div>
      </Grid>
    </Contain>
  )
}

export default App
