import React from "react"
import { Title, Text, Hover } from "../../../styles/style"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import styled from "styled-components"

const Grid = styled.div`
  height: 30vh;
  display: grid;
  grid-gap: 3rem 3rem;
  grid-template-columns: 5rem auto 5rem;
`

const DistributedMeetups = (props): JSX.Element => {
  const {} = props

  return (
    <div>
      <br />
      <Title center>Regionally Distributed Meetup Groups</Title>

      <Text white small center>
        Create Multiple groups of your event across different regions to reach a
        far greater audience. <br />
        Meetup Groups are quick and easy to setup and launch as they inherit the
        features of the parent event.
      </Text>

      <Grid>
        <Hover
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoIosArrowBack style={{ fontSize: "4rem" }} />
        </Hover>

        <div></div>

        <Hover
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoIosArrowForward style={{ fontSize: "4rem" }} />
        </Hover>
      </Grid>
    </div>
  )
}

export default DistributedMeetups
